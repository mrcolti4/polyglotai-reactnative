import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { Link } from "expo-router";
import React from "react";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  styles?: StyleProp<TextStyle>;
}

const NavLink = ({ children, href, styles }: NavLinkProps) => {
  return (
    <Link style={styles} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;

const styles = StyleSheet.create({});
