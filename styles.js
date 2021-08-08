import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#FBFF00",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    fontSize: 16,
    padding: 5,
    paddingLeft: 10,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  button: {
    flex: 0.48,
  },
  imageBack: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageLogo: {
    flex: 0.6,
    resizeMode: "stretch",
    marginLeft: 30,
    marginRight: 30,
  },
  imageLogo2: {
    flex: 1,
    resizeMode: "stretch",
    marginLeft: 55,
    marginRight: 55,
  },
  search: {
    margin: 20,
    marginBottom: 40,
  },
  baseText: {
    fontWeight: "bold",
    color: "#FBFF00",
    fontSize: 16,
    paddingBottom: 10,
  },
  text: {
    fontSize: 15,
    padding: 3,
  },
  scrollView: {
    backgroundColor: "#E7E4F1",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
});
