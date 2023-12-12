import { Button, ButtonProps, rem } from '@mantine/core';
//import { TwitterIcon } from '@mantine/ds';
import { IconBrandTwitter } from '@tabler/icons-react';

export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
    return (
        <Button
            leftSection={<IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            variant="default"
            {...props}
        />
    );
}