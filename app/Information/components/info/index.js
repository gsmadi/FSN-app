import React, {
  Component,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Clipboard
} from 'react-native';
import Spinner from 'react-native-spinkit';
import { PureRender } from '../../../components';
import styles from './styles';

class Info extends Component {
  handleCopyPassword = () => {
    Clipboard.setString(this.props.wifi.password);
  };
  render() {
    if (this.props.fetching && this.props.faq.length === 0) {
      return (
        <View style={styles.loader}>
          <Spinner
            type='ThreeBounce'
            color='#50E3C2'
            size={80}
          />
        </View>
      );
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>{this.props.faq[0].question}</Text>
          <Text style={styles.answer}>{this.props.faq[0].answer}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Get Involved in the community</Text>
          <Text style={styles.answer}>{this.props.slackUrl}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>WiFi</Text>
          <Text style={styles.wifi}>WIFI: {this.props.wifi.name}</Text>
          <Text style={styles.wifi}>Password: {this.props.wifi.password}</Text>
          <TouchableOpacity onPress={this.handleCopyPassword}>
            <View style={styles.copyPassword}>
              <Text style={styles.copyPasswordText}>Copy Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Code of Conduct</Text>
          {this.props.codeOfConduct.map((part, idx) => {
            return <Text key={idx} style={styles.part}>{part}</Text>;
          })}
        </View>
      </ScrollView>
    );
  }
}

export default PureRender(Info);
