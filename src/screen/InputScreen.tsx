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

export const InputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <View style={styles.marginGlobal} >
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

          <Title title={JSON.stringify(form, null, 4)} />
          <Title title={JSON.stringify(form, null, 4)} />
          <TextInput
            style={stylesInput.input}
            onChangeText={value => onChange(value, 'phone')}
            autoCorrect={false}
            keyboardType='phone-pad'
          />
        </View>
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
