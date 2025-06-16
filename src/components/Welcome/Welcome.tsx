import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import { auth } from '../../../src/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export function Welcome() {

  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        eba
        {/*{' '}*/}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          250
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {user?.email}<br /><br />
        Hey Kenya2 check this out, eba250 webpage already optimized for mobile use, nightmode, email login and stuff. You can finde the source code on my{' '}
        <Anchor href="https://github.com/ironheade/eba250" size="lg">
          {' '} Github
        </Anchor>
        .<br /><br />
        Anyway, eba250 is about batteries and stuff. "European Battery Alliance", but I actually don't know what the 250 stands for.
        <br /><br />
      </Text>
    </>
  );
}