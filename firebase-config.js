// In firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyDmXqZJX7QJZJZJZJZJZJZJZJZJZJZJZJZJZ",
    authDomain: "dataanalysisquiz-12345.firebaseapp.com",
    databaseURL: "https://dataanalysisquiz-12345-default-rtdb.firebaseio.com",
    projectId: "dataanalysisquiz-12345",
    storageBucket: "dataanalysisquiz-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Get a reference to the database service
const database = firebase.database();