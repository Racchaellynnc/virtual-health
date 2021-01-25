import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import PatientDashboard from "../pages/PatientDashboard";
import CheckLogs from "../patient/CheckLogs";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="patient-dashboard" component={PatientDashboard} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;