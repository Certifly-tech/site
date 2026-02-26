# ConvertKit Integration Setup

## 🚀 Quick Setup (5 minutes)

### 1. Create a ConvertKit Account
- Go to [convertkit.com](https://convertkit.com)
- Sign up for free trial
- Choose the "Creator" plan (free for up to 100 subscribers)

### 2. Create a Form
1. Navigate to **Forms** → **Create Form**
2. Choose **Inline** form type
3. Design your form (simple email capture)
4. Publish the form

### 3. Get Form ID
1. Go to your form
2. Click **Settings** → **HTML**
3. Look for the form ID in the action URL:
   ```
   action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions"
   ```
4. Copy `YOUR_FORM_ID`

### 4. Configure Environment Variables
Create a `.env` file in your project root:

```bash
PUBLIC_CONVERTKIT_FORM_ID=your_form_id_here
PUBLIC_CONVERTKIT_API_KEY=your_api_key_here  # Optional, for API usage
```

⚠️ **Important**: The `.env` file should NOT be committed to Git! Add it to `.gitignore`.

### 5. Update Form Component
The `WaitlistForm.astro` component will automatically detect ConvertKit if these environment variables are set.

## 🔧 Advanced Configuration

### API Integration (Optional)
If you want to use the API instead of plain form submission:

1. Get your API key from **Account** → **Settings** → **API Key**
2. Add to `.env`:
   ```
   PUBLIC_CONVERTKIT_API_KEY=ck_xxxxxxxxxxxx
   ```

### Add Custom Fields
To capture more data (like name, company):

```astro
<input type="text" name="fields[first_name]" placeholder="First name">
<input type="text" name="fields[company]" placeholder="Company">
```

### Tags and Sequences
You can automatically tag subscribers:

```html
<input type="hidden" name="tags[]" value="waitlist">
<input type="hidden" name="tags[]" value="beta">
```

### Redirect After Submission
Add a redirect to a thank you page:

```html
<input type="hidden" name="redirect" value="https://certifly.tech/thank-you">
```

## 📊 Tracking Success

The component automatically:
- Saves emails to localStorage as fallback
- Tracks Google Analytics conversion (if GA is loaded)
- Shows success state
- Handles errors gracefully

## 🛡️ Privacy & Compliance

The form includes:
- **Honeypot field** to prevent spam
- **LocalStorage fallback** if ConvertKit fails
- **No external tracking** without consent
- **GDPR friendly** design

## 🔄 Migration Ready

If you later want to switch to another service:
1. The form submission logic is centralized in one component
2. Just update the form `action` URL and field names
3. All UI/UX remains the same

## 🚨 Troubleshooting

### Form not submitting?
1. Check form ID is correct
2. Verify network tab for errors
3. Test with localStorage fallback

### Emails not appearing in ConvertKit?
1. Check ConvertKit dashboard
2. Verify form is published (not draft)
3. Check spam folder

### Need more customization?
Edit `src/components/WaitlistForm.astro`:
- Change success messages
- Add custom validation
- Integrate with other services

## 📈 Performance Impact

The ConvertKit integration:
- ✅ No blocking resources
- ✅ Loads asynchronously  
- ✅ Falls back gracefully
- ✅ Minimal JavaScript (8KB gzipped for ConvertKit SDK if used)

## 🎯 Next Steps

1. **Set up ConvertKit** (5 minutes)
2. **Add environment variables** (2 minutes)
3. **Test submission** (1 minute)
4. **Customize emails** in ConvertKit (optional)
5. **Set up automation** for beta launch announcements