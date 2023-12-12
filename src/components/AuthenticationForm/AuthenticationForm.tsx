import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { auth } from '../../../src/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from 'react';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandGoogle } from '@tabler/icons-react';

const defaultStart = ['login', 'register'];

interface IMyProps extends PaperProps {
    closeLogin: VoidFunction;
}


export function AuthenticationForm(props: PaperProps) {

    const [type, toggle] = useToggle(defaultStart);
    //const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);
    const [wrong, setWrong] = useState(false)
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const signUpUserWithEmailAndPassword = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            logInWithEmailAndPassword(email, password);
        } catch (err: any) {
            console.error(err);
            //alert(err.message);

        }
    };

    function SignIn() {
        const email = (form.getInputProps('email').value);
        const password = (form.getInputProps('password').value);
        signUpUserWithEmailAndPassword(email, password)
    }

    const logInWithEmailAndPassword = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setWrong(false);
            //props.closeLogin
        } catch (err: any) {
            console.error(err);
            //alert(err.message);
            setWrong(true)
        }
    };

    function Login() {
        const email = (form.getInputProps('email').value);
        const password = (form.getInputProps('password').value);
        console.log(user?.email)
        logInWithEmailAndPassword(email, password)
        console.log(user?.email)

    }

    return (
        <Paper radius="md" p="xl" withBorder {...props}>
            <Text size="lg" fw={500}>
                Welcome to Mantine, {type} with
            </Text>

            <Group grow mb="md" mt="md">
                <Button leftSection={<IconBrandGoogle size={14} />} variant="default" radius="xl">
                    Google
                </Button><Button leftSection={<IconBrandTwitter size={14} />} variant="default" radius="xl">
                    Twitter
                </Button>
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <form onSubmit={form.onSubmit(() => { })}>
                <Stack>
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            value={form.values.name}
                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            radius="md"
                        />
                    )}

                    <TextInput
                        required
                        label="Email"
                        placeholder="hello@mantine.dev"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email && 'Invalid email'}
                        radius="md"
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password && 'Password should include at least 6 characters'}
                        radius="md"
                    />

                    {wrong && <p style={{ color: "red" }}>Wrong Email or Password</p>}

                    {type === 'register' && (
                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                        />
                    )}
                </Stack>

                <Group justify="space-between" mt="xl">
                    <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
                        {type === 'register'
                            ? 'Already have an account? Login'
                            : "Don't have an account? Register"}
                    </Anchor>
                    <Button type="submit" radius="xl" onClick={() => type == "login" ? Login() : SignIn()}>
                        {upperFirst(type)}
                    </Button>
                </Group>
            </form>
        </Paper>
    );
}