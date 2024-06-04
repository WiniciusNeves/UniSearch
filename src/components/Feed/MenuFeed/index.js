import { Menu, HomeIcon, HamburguerIcon, Button, ButtonPost, TextPost, Icone } from "./styles";
import { useNavigation } from "@react-navigation/native";

const MenuFeed = () => {
    const navigation = useNavigation();
    return (
        <Menu>
            <Button onPress={() => navigation.navigate('Feed')}>
                <HomeIcon name="home" />
            </Button>
            <Button onPress={() => navigation.navigate('MenuResgister')}>
                <ButtonPost>
                    <Icone name="edit" style={{ position: 'absolute', left: 30, fontSize: 20, color: 'white' }} />
                    <TextPost>escrever post</TextPost>
                </ButtonPost>
            </Button>
            <Button onPress={() => navigation.navigate('Menu')}>
                <HamburguerIcon name="navicon" />
            </Button>
        </Menu>
    );
}

export default MenuFeed;
