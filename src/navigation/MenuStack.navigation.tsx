import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { ScreenSlide1, ScreenSlide2 } from '../screens';

type MenuStackParam = { //define o nome das telas para a navegação(MenuStackParam)//
    Slide1: undefined
    Slide2: undefined
}
//o MenuScreenNavigation guarda a tipagem criada aplicada nas propriedades da StackNavigationProp
type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide1">
export type MenuStackTypes = { //MenuStackTypes foi exportado para tipar os parâmetros das telas para permitir o uso das funções que realizam a navegação.
    navigation: MenuScreenNavigation
}

export function MenuStack() { //Dentro da function component MenuStack criamos a constante Stack que será o componente responsável por definir a navegação e as telas.
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Slide1" component={ScreenSlide1} />
            <Stack.Screen name="Slide2" component={ScreenSlide2} />
        </Stack.Navigator>
    );
}