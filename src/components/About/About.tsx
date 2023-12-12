import { Title, Text, Anchor } from '@mantine/core';
import classes from './About.module.css';

export function About() {
    return (
        <>
            <Title className={classes.title} ta="center" mt={100}>
                About the{' '}
                <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'red' }}>
                    Project
                </Text>
            </Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                React Vite + Firebase is the stack I think we should be using. Hosting, password management and a relational database is very easy and already included. Took me like 20 minutes to create this website. <br /><br />
                This starter Vite project includes a blabla minimal setup, if you want to learn more on Mantine +
                Vite integration follow{' '}
                <Anchor href="https://mantine.dev/guides/vite/" size="lg">
                    this guide
                </Anchor>
                . To get started edit pages/Home.page.tsx file.
            </Text>
        </>
    );
}