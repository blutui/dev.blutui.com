Before using **Courier**, you need to generate a Blutui access token. Follow these steps:

1. In your [Agency Console](https://console.blutui.com), click on your avatar in the top-right corner and choose `Edit my profile`.
2. Go to the `Apps` section in the sidebar.
3. Click `Create token` on the right, under the "Access tokens" section.
4. Name your token, e.g., "Work MacBook".
5. Set the token type to "Courier". Required permissions for Courier will be automatically selected.
6. Click **Create token**. Your Courier token will be displayed. Copy and store it securely, as it will only be shown this one time.

### Using your Courier token

{% if equals($os, "windows") %}
1. Create a new `token.txt` file with your access token.
{% else /%}
1. To securely add your access token to a `token.txt` file, use the following command:

```bash
read -s -p "Enter your Courier access token: " TOKEN && echo $TOKEN > token.txt
```

{% callout type="note" %}
This command prompts for the token input without displaying it on-screen, then saves it to `token.txt` file without recording it in shell history.
{% /callout %}
{% /if %}


2. Log in to Courier using your token file:

```bash
courier login --token < token.txt
```

3. Remember to delete the `token.txt` file once you have successfully logged into Courier.

Once configured, you're ready to start pushing and pulling projects.

{% callout type="note" %}
Complete the [getting started guide](/docs/courier/getting-started#linking-your-project) and learn how to start building your first project.
{% /callout %}
