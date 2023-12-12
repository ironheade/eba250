import { Switch, useMantineTheme, rem, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

export function NightDaySwitch() {
    const theme = useMantineTheme();
    const [checked, setChecked] = useState(false);
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    function ChangeTheme() {
        checked ? setColorScheme("light") : setColorScheme("dark")
    }

    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );

    return <Switch size="md" color="dark.4" checked={checked} onChange={(event) => { setChecked(event.currentTarget.checked); ChangeTheme() }
        //(event) => setChecked(event.currentTarget.checked)
    } onLabel={sunIcon} offLabel={moonIcon} />;
}