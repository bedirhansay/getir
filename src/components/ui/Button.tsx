import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ClassNameValue, twMerge } from "tailwind-merge";
import { cn } from "utils/cn";

type ButtonProps = {
  icon?: any;
  title?: string;
  color?: string;
  size?: number;
  className?: ClassNameValue;
  onPress?: () => void;
};

export const Button: FC<ButtonProps> = ({
  icon,
  title,
  onPress,
  color,
  size,
  className,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      className={cn("flex items-center justify-center", className)}
    >
      <Ionicons name={icon} size={size} color={color} />
      {title ? <Text>{title}</Text> : null}
    </TouchableOpacity>
  );
};
