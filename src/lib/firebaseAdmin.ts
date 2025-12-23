import "server-only"; // Ensures this code never bundles to the client
import admin from "firebase-admin";

interface FirebaseAdminConfig {
  projectId: string;
  clientEmail: string;
  privateKey: string;
}

function formatPrivateKey(key: string) {
  return key.replace(/\\n/g, "\n");
}

if (!admin.apps.length) {
  const params: FirebaseAdminConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!,
  };

  if (params.projectId && params.clientEmail && params.privateKey) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: params.projectId,
        clientEmail: params.clientEmail,
        privateKey: formatPrivateKey(params.privateKey),
      }),
    });
  }
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore(); // If you need Firestore alongside Mongo