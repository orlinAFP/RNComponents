import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Title} from '../components/Title';
import {styles} from '../theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';

export const InputScreen = () => {
  const {onChange, form} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        {/* //Permite que al dar click, se cierre el teclado */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.marginGlobal}>
            <Title title="Inputs" />

            <TextInput
              style={stylesInput.input}
              onChangeText={value => onChange(value, 'name')}
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={stylesInput.input}
              onChangeText={value => onChange(value, 'email')}
              autoCorrect={false}
              keyboardType="email-address"
            />
            <CustomSwitch isOn={form.isSubscribed} onChange={(value) => onChange(value, 'isSubscribed') } />

            <Title title={JSON.stringify(form, null, 4)} />
            <Title title={JSON.stringify(form, null, 4)} />
            <TextInput
              style={stylesInput.input}
              onChangeText={value => onChange(value, 'phone')}
              autoCorrect={false}
              keyboardType="phone-pad"
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesInput = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
