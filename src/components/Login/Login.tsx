import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { AuthenticationForm } from '../AuthenticationForm/AuthenticationForm';
import { auth } from '../../../src/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


export function Login() {
    const [opened, { open, close }] = useDisclosure(false);
    const [user, loading, error] = useAuthState(auth);
    function SignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    function callbackModal(): any {
        close();
    }

    return (
        <>
            <Group justify="center" >
                <Modal mx="auto" opened={opened} onClose={close} title="Authentication">
                    <AuthenticationForm
                    />

                </Modal>

                <Button variant="default" mx="auto" onClick={user ? SignOut : open} >{user ? "logout" : "Login/ Sign Up"}</Button>
            </Group>

        </>
    );
}