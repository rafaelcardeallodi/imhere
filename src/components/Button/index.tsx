import { Text, TouchableOpacity,} from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  onPress?: () => void;
}

export function Button({children, backgroundColor = '#31CF67', ...rest}: ButtonProps){
  return(
    <TouchableOpacity 
      style={{
        ...styles.button,
        backgroundColor: backgroundColor
      }}
      {...rest}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}