import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native'
import React from "react";
import { FontAwesome } from '@expo/vector-icons';

function TabBarIcon(props:{
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={20} {...props} style={{ color: '#FFA001' }}  />;
}

const TabsLayout = () => {
    return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <Tabs
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle:{fontSize: 16},
            tabBarStyle:{ 
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 2,
                height: 60,
                paddingBottom: 10
             }
         }}>
        <Tabs.Screen
            name="index"
            options={{ 
                title: "Shop",
                tabBarIcon(props)
                {
                    return <TabBarIcon {...props} name="shopping-cart" />
                }
            }}
        />
        <Tabs.Screen
            name="orders"
            options={{ 
                title: "Orders",
                tabBarIcon(props)
                {
                    return <TabBarIcon {...props} name="book" />
                }
            }}
        />
    </Tabs>
    </SafeAreaView>
    );
}

export default TabsLayout

const styles = StyleSheet.create({
    safeArea:{
        flex: 1
    }
})