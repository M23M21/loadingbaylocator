// styles/globalStyles.js

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // =======================
  // ===== General Styles =====
  // =======================
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 80,
    paddingTop: 20, // Adăugat pentru a evita suprapunerea conținutului cu header-ul
  },
  infoTextCenter: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },

  // =======================
  // ===== Header Styles =====
  // =======================
  // Stiluri utilizate de paginile index, signup, login
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#3A6BD8',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Stiluri comune pentru header utilizate de celelalte pagini
  commonHeader: {
    backgroundColor: '#3A6BD8',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  commonHeaderTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // =======================
  // ===== Authentication Styles =====
  // =======================
  authContainer: {
    flex: 1,
    backgroundColor: '#3A6BD8',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 70,
    textAlign: 'center',
  },
  authInput: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    width: '100%',
  },
  authButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  authLinkText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 180,
    fontWeight: 'bold',
  },
  loginLinkContainer: {
    marginTop: 250,
    marginBottom: 10,
  },
  signupLink: {
    marginBottom: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },

  // =======================
  // ===== Password Reset Styles =====
  // =======================
  passwordResetContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  passwordResetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  passwordResetSubtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
    marginBottom: 20,
    width: '100%',
  },
  passwordResetInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordResetButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  passwordResetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordResetCancelButton: {
    marginTop: 10,
  },
  passwordResetCancelButtonText: {
    color: '#000',
    fontSize: 16,
  },

  // =======================
  // ===== Button Styles =====
  // =======================
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '60%',
    alignSelf: 'flex-start',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // =======================
  // ===== Home Styles =====
  // =======================
  homeContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  homeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3A6BD8',
    marginBottom: 20,
    textAlign: 'center',
  },
  homeImage: {
    width: '100%',
    height: width * 0.7,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#3A6BD8',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeLinkButton: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#27ae60',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  homeLinkText: {
    color: '#2ecc71',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // =======================
  // ===== Result Styles =====
  // =======================
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '95%',
    alignSelf: 'center',
  },
  resultInfoLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  resultInfoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  resultLinkText: {
    color: '#3498db',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginBottom: 10,
  },

  // =======================
  // ===== Footer Styles =====
  // =======================
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
  footerItem: {
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  footerText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 4,
  },

  // =======================
  // ===== Miscellaneous Styles =====
  // =======================
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 50,
  },
  whiteText: {
    color: '#fff',
  },
  greenText: {
    color: '#2ecc71',
  },
  grayText: {
    color: '#7f8c8d',
  },
  deleteText: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // =======================
  // ===== FAQ Styles =====
  // =======================
  faqItem: {
    marginBottom: 20,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
  },
  contactButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // =======================
  // ===== Profile Styles =====
  // =======================
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  profileInfoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileInfoText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },

  // =======================
  // ===== Edit Profile Styles =====
  // =======================
  editProfileContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  editProfileInfoContainer: {
    width: '100%',
    padding: 20,
  },
  editProfileInput: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
  },
  editProfileButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  editProfileButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
    // Save Button Styles
    saveButton: {
      backgroundColor: '#3498db',
      padding: 12,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      width: '60%',
      alignSelf: 'flex-start',
      flexDirection: 'row',
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 8,
    },
    
    // Delete Button Styles
    deleteButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    deleteText: {
      fontSize: 16,
      color: '#e74c3c',
      fontWeight: 'bold',
      marginLeft: 8,
    },

  // =======================
  // ===== Error Text Style =====
  // =======================
  errorText: {
    color: '#ffff',
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },

  // =======================
  // ===== Loading Container Style =====
  // =======================
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',  // Roșu
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
  
});
