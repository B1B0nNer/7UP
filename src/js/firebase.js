// IMPORTS
import { initializeApp } from "firebase/app";
// Database imports
import {
    doc,
    getFirestore,
    collection,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
} from "firebase/firestore";
// Authentication imports
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
} from 'firebase/auth';
// Cradentials
const firebaseConfig = {
    apiKey: "AIzaSyB4nDHn4MwFdhmCP-XbrhPgo0UbVXx6PFA",
    authDomain: "fir-app-34ddb.firebaseapp.com",
    projectId: "fir-app-34ddb",
    storageBucket: "fir-app-34ddb.appspot.com",
    messagingSenderId: "944304437800",
    appId: "1:944304437800:web:d7592842e137fa1f93931d"
};
export let user_cradentials;
// Initialization
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ======================================================================
// FORM METHODS
// ======================================================================

const open_autorization_btn = document.querySelector('.open-autorization-btn');
const login_title = document.querySelector('.login-btn__title');
const authorization__bacdrop = document.querySelector('.authorization__bacdrop');
const logout_btn = document.querySelector('.logout-btn');

// CHECK USER STATUS
onAuthStateChanged(auth, (data) => {

    if (data === null || data === undefined) {

        login_title.innerHTML = `Sign up`;
        logout_btn.classList.add('is-hidden');
        open_autorization_btn.dataset.status = false;
        authorization__bacdrop.style.display = 'block';
        open_autorization_btn.dataset.status = false;

    } else {

        login_title.innerHTML = auth.currentUser.displayName;
        logout_btn.classList.remove('is-hidden');
        open_autorization_btn.dataset.status = true;
        authorization__bacdrop.style.display = 'none';
        open_autorization_btn.dataset.status = true;

    }

})

// LOGOUT
/** Метод для выхода пользователя из системы */
export function firebase_logout() {
    signOut(auth)
        .then(() => localStorage.clear())
        .catch(error => console.log(error))
}

// REGISTRATION
/** Эта функция регистрирует нового пользователя
    @param {string} user_email - Электронная почта пользователя.
    @param {string} user_password - Пароль пользователя.
    @param {string} user_nickname - Псевдоним пользователя.
    @param {string} theme - тема сайта (светлая\темная).
    @returns {Promise<void>} - Промис, который разрешается, когда регистрация успешна, или отклоняется с ошибкой.
*/
export async function firebase_registration(user_email, user_password, user_nickname, theme) {

    const add_user_data_to_db = async () => {

        const user_data_collection = collection(db, 'Users')
        const docRef = doc(user_data_collection, user_nickname)

        setDoc(docRef, {
            email: user_email,
            nickname: user_nickname,
            theme: theme
        })
            .catch(error => console.log(error))

    }

    try {
        const data = await createUserWithEmailAndPassword(auth, user_email, user_password);

        await updateProfile(data.user, { displayName: user_nickname })
            .then(() => {
                login_title.innerHTML = auth.currentUser.displayName;
            })
        
        await add_user_data_to_db();

    }

    catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('Этот Email уже используется.');
        } else {
            console.log(error);
        }
    }
    
}

// AUTORIZATION
/** Функция для авторизации пользователя.
    @param {string} user_email - Электронная почта пользователя.
    @param {string} user_password - Пароль пользователя.
    @returns {Promise<void>} - Промис, который разрешается, когда авторизация успешна, или отклоняется с ошибкой.
*/
export function firebase_autorization(user_email, user_password) {
    if (!auth.currentUser) {

        signInWithEmailAndPassword(auth, user_email, user_password)
            .then(() => {
                firebase_getAllItems(auth.currentUser.displayName)
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/user-not-found':
                        console.log('Пользователь с таким Email не найден');
                        break;
                    case 'auth/wrong-password':
                        console.log('Неверный пароль');
                        break;
                    case 'auth/invalid-email':
                        console.log('Неверный email');
                        break;
                    default:
                        console.error(error);
                        break;
                }
            });

    } else {
        console.error('Пользователь уже авторизован!');
    }

}

// ======================================================================
// DATABASE METHODS
// ======================================================================

// SET BOOK TO DB
/** Сохраняет информацию о книге в базу данных.
    @param {string} bookID - Идентификатор книги.
    @param {object} bookData - Данные книги для сохранения.
*/
export async function firebase_addItem(bookID, bookData) {
    try {
        const userCollection = collection(db, auth.currentUser.displayName);
        const docRef = doc(userCollection, bookID);

        await setDoc(docRef, bookData);
    } catch (error) {
        console.error("Ошибка при сохранении документа:", error);
    }
}

// DELETE BOOK FROM DB
/** Удаляет элемент книги из базы данных.
    @param {string} bookID - Идентификатор книги, которую нужно удалить.
*/
export async function firebase_deleteItem(bookID) {

    const userCollection = collection(db, auth.currentUser.displayName);
    const docRef = doc(userCollection, bookID);

    try {
        await deleteDoc(docRef);
    } catch (error) {
        console.error(error);
    }

}

// GET ALL BOOKS FROM DB
/** Получает все книги пользователя из базы данных и сохраняет их в localStorage.
    @param {string} userName - Имя пользователя, чьи книги нужно получить.
*/
export async function firebase_getAllItems(userName) {

    const userCollection = collection(db, userName);
    const querySnapshot = await getDocs(userCollection);

    querySnapshot.forEach((doc) => {
        const item = {
            id: doc.id,
            data: doc.data(),
        };
        localStorage.setItem(item.id, JSON.stringify(item.data));
    });

}