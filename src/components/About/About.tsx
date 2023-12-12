import { Title, Text, Anchor } from '@mantine/core';
import classes from './About.module.css';

export function About() {
    return (
        <>
            <Title className={classes.title} ta="center" mt={100}>
                About {' '}
                <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'red' }}>
                    eba250
                </Text>
            </Title>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Text>
        </>
    );
}