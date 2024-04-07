import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import config from "./config.json";

const { apiKey, appId, authDomain, measurementId, messagingSenderId, projectId, storageBucket } = config;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

const auth = initializeApp(firebaseConfig);
const messaging = getMessaging(auth);

const Index = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const currentToken = await getToken(messaging, { vapidKey: 'BHBiT_tsVfu5V45kfO28dwF27iTK7P86yFH8DkGclWJ3N9okQvVkFCJ_F5NMu2LGrb3IhWNe-wUjeCXXs5W_4h8' });

      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log(currentToken);
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    } else {
      console.log('Notification permission denied:', permission);
    }
  } catch (err) {
    console.log('Error while processing notification permission:', err);
  }
};

export default Index;
