import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // General container styles
  container: {
    flex: 1,
    backgroundColor: '#3A6BD8', // Default blue background for Signup and Login
    padding: 20,
    justifyContent: 'center', // Center the content
  },

  // Home screen styles
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the home screen
    justifyContent: 'flex-start', // Align content to the top
    padding: 20,
    paddingTop: 40, // Add more padding to the top if needed
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A6BD8', // Blue color for the title text on the home screen
    textAlign: 'center',
    marginVertical: 10, // Adjust spacing around the title
    paddingVertical: 0, // No padding needed for title
    backgroundColor: 'transparent', // Remove background color
  },
  homeImage: {
    width: '100%',
    height: undefined, // Let the height adjust based on the aspect ratio
    aspectRatio: 16 / 9, // Maintain aspect ratio (adjust as needed)
    resizeMode: 'cover',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#007bff', // Blue button background on the home screen
    paddingVertical: 15,
    borderRadius: 5,
    width: '80%', // Adjust width for better spacing
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center', // Center the button
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  homeLinkButton: {
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center', // Center the text link
  },
  homeLinkText: {
    color: '#2ecc71', // Green color for the link text on the home screen
    fontWeight: 'bold',
  },

  // Password Reset screen styles
  passwordResetContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the password reset screen
    alignItems: 'center',
    padding: 20,
  },
  passwordResetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left', // Align to the left
    width: '100%',
  },
  passwordResetSubtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left', // Align to the left
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
    backgroundColor: '#2ecc71', // Green button background for the password reset screen
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
    color: '#000', // Black color for the cancel button text
    fontSize: 16,
  },

  // Text styles
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // White color for the title to stand out against the blue background
    textAlign: 'center',
    marginBottom: 40, // Adjust the spacing to match the prototype
    marginTop: 30, // Move the title closer to the top
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#ffffff', // White text for links
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 50, // Increase margin to move the text further down
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
  logoutText: {
    color: '#3498db', // Blue color for logout text in the footer
    fontWeight: 'bold',
  },
  infoLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333', // Dark color for labels inside the cards
    marginBottom: 3,
  },
  infoText: {
    fontSize: 14, // Reduced font size to make text fit better
    color: '#555', // Slightly lighter color for the information text
  },
  infoLabelWhite: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    color: '#fff', // White color for labels inside the blue section
  },
  infoTextWhite: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff', // White color for text inside the blue section
  },
  headerTitle: {
    color: '#fff', // White color for the header title
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centered text
  },

  // Input styles
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    width: '100%',
    height: 40,
  },

  // Button styles
  button: {
    backgroundColor: '#2ecc71', // Green button to match the prototype
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10, // Ensure consistent margin
  },
  greenButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },

  // Image styles
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  // Footer styles
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8, // Reduced padding to make footer more compact
    backgroundColor: '#fff', // White background for the footer
    position: 'absolute',
    bottom: 0, // Footer at the bottom
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#7f8c8d',
  },

  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007bff', // Blue background for the header
  },
  headerCenter: {
    flex: 1, // Center the title in the header
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginRight: 10,
  },

  // Card styles
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15, // Padding inside cards
    marginVertical: 5, // Vertical margin between cards
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },

  // Info section styles
  infoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Added borders for better separation
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Ensure footer doesn't overlap content
  },
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
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },

  // Link Button Styles (for the green link with the rectangular box)
  linkButton: {
    borderColor: '#2ecc71', // Green border to match the prototype
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },

  // Specific for Login Screen spacing
  loginLinkContainer: {
    marginTop: 40, // Space between login button and Forgot Password link
    marginBottom: 10, // Space between Forgot Password link and Signup link
  },
  signupLink: {
    marginBottom: 50, // Space to push the Signup link to the bottom
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },

  // Search Screen specific styles
  searchContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the search screen
    justifyContent: 'flex-start',
  },
  searchTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for the title to stand out against the blue background
    textAlign: 'center',
    marginVertical: 10, // Adjust spacing around the title
    backgroundColor: '#3A6BD8', // Blue background similar to the prototype
    paddingVertical: 20, // Increase padding for better appearance
    width: '100%', // Stretch across the screen
  },
  searchImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  // Saved screen styles
  savedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  savedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },

  // Profile screen styles
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 30,
    color: '#fff', // White color for the title
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileInfoText: {
    fontSize: 18,
    color: '#fff', // White color for the info text
  },
  profileEditButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileLogoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  // Help screen styles
  helpContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the help screen
    padding: 20,
  },
  helpTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000', // Black color for the title text
    textAlign: 'center',
    marginBottom: 20,
  },
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
    color: '#666', // Grey color for the FAQ answers
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

  // Result screen styles
  resultContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for the result screen
    padding: 20,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000', // Black color for the title text
    textAlign: 'center',
    marginBottom: 20,
  },
  resultInfoContainer: {
    marginBottom: 20,
  },
  resultInfoLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333', // Dark color for the labels
    marginBottom: 5,
  },
  resultInfoText: {
    fontSize: 14,
    color: '#555', // Slightly lighter color for the info text
  },
  resultImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  resultFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  resultFooterItem: {
    alignItems: 'center',
  },
  resultFooterText: {
    fontSize: 12,
    color: '#7f8c8d',
  },

  // Collapsible component styles
  collapsibleHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  collapsibleContent: {
    marginTop: 6,
    marginLeft: 24,
  },

  // Navigation Tab Bar Icon styles
  tabBarIcon: {
    marginBottom: -3,
  },

  // Parallax Scroll View styles
  parallaxContainer: {
    flex: 1,
  },
  parallaxHeader: {
    height: 250,
    overflow: 'hidden',
  },
  parallaxContent: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
