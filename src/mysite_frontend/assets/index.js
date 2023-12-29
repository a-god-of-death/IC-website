import {AuthClient} from "@dfinity/auth-client"
import {HttpAgent} from "@dfinity/agent";

const loginButton = document.getElementById("login");
loginButton.onclick = async (e) => {
    e.preventDefault();

    // create an auth client
    let authClient = await AuthClient.create();

    // start the login process and wait for it to finish
    await new Promise((resolve) => {
        authClient.login({
            identityProvider: "https://gxyo6-maaaa-aaaap-qb5mq-cai.icp0.io/",
            onSuccess: resolve,
        });
    });

    // At this point you're authenticated, and you can get the identity from the auth client:
    const identity = authClient.getIdentity();
    // Using the identity obtained from the auth client, you can create an agent to interact with ICP.
    const agent = new HttpAgent({identity});
    // You can now use the agent to interact with canisters on the Internet Computer.
};
