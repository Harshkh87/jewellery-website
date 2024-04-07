importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyB9hBtKdTt657FMbOXRVZWdejt5eLbgPNI",
    authDomain: "harsh-78.firebaseapp.com",
    projectId: "harsh-78",
    storageBucket: "harsh-78.appspot.com",
    messagingSenderId: "222031881584",
    appId: "1:222031881584:web:987249cb00bdd44f5bdbb5",
    measurementId: "G-3QLR4LVY8Y"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});