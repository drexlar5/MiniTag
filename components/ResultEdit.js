import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Icon, Button } from 'native-base';
import { Table, TableWrapper,Col, Cols, Cell , Row, } from 'react-native-table-component';
import { TextInput } from 'react-native-paper';
import { Constants } from 'expo';
// import { Col, Row, Grid } from "react-native-easy-grid";

export default class ResultEdit extends Component {

  state = {
      tableHead: ['', 'Raised', 'Resolved', ],
      tableData: [
        ['Basic Condition', '2', '3', ],
        ['SHE', 'b', 'c', ],
        ['SOC', '2', '3', ],
        ['5S', 'b', 'c', ]
      ]
    }
  
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TextInput />
    );
 
    return (
      <Container style={styles.all}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          </Body>
          <Right />
        </Header>
       <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex > 0 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
       </View>
      </Container>
    )
  }
}
 
const styles = StyleSheet.create({
  all: {flex: 1, paddingTop: Constants.statusBarHeight},
  container: { flex: 1, padding: 9, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});


// {
//   <Table borderStyle={{borderColor: 'transparent'}}>
//           <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//           {
//             state.tableData.map((rowData, index) => (
//               <TableWrapper key={index} style={styles.row}>
//                 {
//                   rowData.map((cellData, cellIndex) => (
//                     <Cell key={cellIndex} data={cellIndex > 0 ? element(cellData, index) : cellData} textStyle={styles.text}/>
//                   ))
//                 }
//               </TableWrapper>
//             ))
//           }
//         </Table>
// }