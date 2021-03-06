# Migration `20200917223423-added-user-and-message-models`

This migration has been generated by SakshamKhatwani at 9/18/2020, 4:04:23 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "body" TEXT NOT NULL,
    "sentById" INTEGER NOT NULL,
    "sentToId" INTEGER NOT NULL,

    FOREIGN KEY ("sentById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("sentToId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200917215753-init..20200917223423-added-user-and-message-models
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
     provider = "sqlite"
-    url = "***"
+    url = "***"
 }
 generator client {
     provider = "prisma-client-js"
@@ -9,6 +9,17 @@
 model User {
     id Int @id @default(autoincrement())
     name String
-    email String
+    email String @unique
+    messages Message[]
+}
+
+model Message {
+    id Int @id @default(autoincrement())
+    createdAt DateTime @default(now())
+    body String
+    sentBy User @relation(fields: [sentById], references: [id])
+    sentById Int
+    sentTo User @relation("Sent_to", fields: [sentToId], references: [id])
+    sentToId Int
 }
```


