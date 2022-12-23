<div align="center"> 
  
  <h1> 🔔 Notifications Microsservice </h1>
  
  <br>
  
  ![NestJS](https://img.shields.io/badge/-NestJS-E0234E?logo=NestJS&logoColor=white&style=for-the-badge)
  ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge)
  ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=Prisma&logoColor=white&style=for-the-badge)
  
</div>


<h2 align="center"> 📄 Description </h2>

<p>
&nbsp This service was born out of the fact that many applications need notifications functionality nowadays, so it is extremely feasible to separate this functionality into a single microservice that can be implemented by anyone who wants to.
</p>

<p>
&nbsp This microservice specializes in notifications, where other applications can communicate with it to send notifications. This service will only be responsible for notifications.
</p>

<h2 align="center"> 🖥️ Run Application </h2>

#### Clone this Repository
```
$ git clone https://github.com/gabrielvsc/notifications-microservice.git
```

#### Go to the directory
```
$ cd notifications-microsservice
```
#### Install dependencies
```
$ npm install
```
#### Run with
```
$ npm run start
```
This starts in http://localhost:3000

<h2 align="center"> 🧪 Run Tests </h2>

#### Run Tests with
```
$ npm run test
$ npm run test:watch
```
#### You can run with Prisma Studio
```
 $ npx prisma studio
```

<h2 align="center"> 📕 API Documentation </h2>

### 📌 Create Notification
```http
  POST /notifications
```
Create a Notification if you give a body with..  **recipientId must be a UUID.**

**JSON Example:**
``
{
	"recipientId": "6d6eec98-1b86-4bda-891c-d0b595697273",
	"content": "New Test Notification",
	"category": "Test"
}
``

<br>

### 📌 Count from Recipient
```http
  GET /notifications/count/from/{recipientId}
```
Returns a count of *{recipientId}* notifications

**JSON Example:**
``
{
   "count": 1
}
``

<br>

### 📌 Get from Recipient
```http
  GET /notifications/from/{recipientId}
```
Returns a Array of *{recipientId}* notifications
**JSON Example:**
``
{
	"notifications": [
		{
			"id": "1e5d8ae6-847e-41d3-9151-ff76444b8fac",
			"content": "New Test Notification",
			"category": "Test",
			"recipientId": "6d6eec98-1b86-4bda-891c-d0b595697273"
		}
	]
}
``

<br>

### 📌 Cancel Notification
```http
  POST /notifications/{id}/cancel
```
Cancels a *{id}* notification, does not remove

<br>

### 📌 Read Notification
```http
  POST /notifications/{id}/read
```
Read a *{id}* notification.

<br>

### 📌 Unread Notification
```http
  POST /notifications/{id}/unread
```
Unread a *{id}* notification.
