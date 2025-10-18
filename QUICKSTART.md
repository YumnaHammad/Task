# 🚀 Quick Start Guide

## Step 1: Start the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

## Step 2: Login with Agent Credentials

Use these credentials to access the dashboard:

```
Email: agent@example.com
Password: agent123
```

## Step 3: Explore the Dashboard

Once logged in, you'll see:
- ✅ **Animated Sidebar** - Click the menu icon on mobile
- ✅ **Statistics Cards** - View task counts by status
- ✅ **Task Management Table** - All your tasks
- ✅ **Profile Dropdown** - Top right corner

## Step 4: Try These Actions

### Add a Task
1. Click the **"Add Task"** button
2. Fill in the task details
3. Click **"Create Task"**

### Edit a Task
1. Click the **pencil icon** on any task
2. Modify the details
3. Click **"Update Task"**

### Delete a Task
1. Click the **trash icon** on any task
2. Confirm deletion in the modal

### Change Task Status
1. Edit a task
2. Select a new status from the dropdown
3. Save changes

## Step 5: Test Role-Based Access

Try logging in with different roles:

### Agent (Full Access)
```
Email: agent@example.com
Password: agent123
```
✅ Can access dashboard

### Admin (No Access)
```
Email: admin@example.com
Password: admin123
```
❌ Redirected to "Not Authorized" page

### User (No Access)
```
Email: user@example.com
Password: user123
```
❌ Redirected to "Not Authorized" page

## 🎨 Features to Explore

- **Responsive Design**: Resize your browser to see mobile/tablet views
- **Smooth Animations**: Notice the sidebar slide, modal pop-ups, and card animations
- **Toast Notifications**: See success/error messages after actions
- **Profile Dropdown**: Click your profile to see options
- **Search Bar**: Try searching (UI only, not functional yet)
- **Notifications Bell**: See the notification indicator

## 📱 Mobile Experience

On mobile devices:
- Sidebar is hidden by default
- Tap menu icon to open sidebar
- Tap outside to close
- All features are fully functional

## 🔐 Session Persistence

Your login session is saved in localStorage:
- Refresh the page - you'll stay logged in
- Close the browser - you'll stay logged in
- Click "Logout" to clear the session

## 🎯 What's Next?

The application is production-ready! You can:
1. Connect to a real backend API
2. Add more features (analytics, reports, etc.)
3. Customize the theme and colors
4. Add more user roles
5. Deploy to production

---

**Happy Coding!** 🎉

