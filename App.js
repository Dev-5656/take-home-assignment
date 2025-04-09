// App.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView,
  StatusBar
} from 'react-native';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [activeTab, setActiveTab] = useState('collections');
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      {/* Profile Screen */}
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('./assets/images/image.png')}
              style={styles.profileImage} 
            />
          </View>
          
          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="share-2" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="settings" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.profileInfo}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>@theo_from_hsr</Text>
            <View style={styles.verifiedBadge}>
              <Feather name="check" size={12} color="white" />
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>EDIT PROFILE</Text>
              <Feather name="edit-2" size={12} color="gray" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.countryContainer}>
            <Image 
              source={require('./assets/images/india.png')} 
              style={styles.flagIcon} 
            />
            <Text style={styles.countryText}>INDIA</Text>
          </View>
          
          <Text style={styles.bio}>
            18 y/o with high ambitions, want to build cool stuff!
          </Text>
          
          <View style={styles.followingContainer}>
            <Feather name="users" size={14} color="#6b7280" />
            <Text style={styles.followingText}>2</Text>
            <Text style={styles.followingLabel}>FOLLOWING</Text>
          </View>
        </View>
      </View>
      
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[
            styles.tab, 
            activeTab === 'collections' && styles.activeTab
          ]}
          onPress={() => setActiveTab('collections')}
        >
          <MaterialIcons 
            name="collections" 
            size={20} 
            color={activeTab === 'collections' ? "#10b981" : "#6b7280"} 
          />
          <Text style={[
            styles.tabText, 
            activeTab === 'collections' && styles.activeTabText
          ]}>
            COLLECTIONS
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.tab, 
            activeTab === 'manageTags' && styles.activeTab
          ]}
          onPress={() => setActiveTab('manageTags')}
        >
          <Ionicons 
            name="ios-pricetag-outline" 
            size={20} 
            color={activeTab === 'manageTags' ? "#10b981" : "#6b7280"} 
          />
          <Text style={[
            styles.tabText, 
            activeTab === 'manageTags' && styles.activeTabText
          ]}>
            MANAGE TAGS
          </Text>
        </TouchableOpacity>
      </View>
    
      {/* Collections Content */}
      {activeTab === 'collections' && (
        <View style={styles.collectionsContainer}>
          {/* Liked Collection Card - 4 images (2x2 grid) */}
          <View style={styles.collectionCard}>
            <View style={styles.thumbnailsGrid}>
              <View style={styles.thumbnailRow}>
                <Image 
                  source={require('./assets/images/collection1.png')} 
                  style={styles.thumbnail}
                />
                <Image 
                  source={require('./assets/images/collection2.png')} 
                  style={styles.thumbnail}
                />
              </View>
              <View style={styles.thumbnailRow}>
                <Image 
                  source={require('./assets/images/collection3.png')} 
                  style={styles.thumbnail}
                />
                <Image 
                  source={require('./assets/images/collection4.png')} 
                  style={styles.thumbnail}
                />
              </View>
            </View>
            <View style={styles.collectionFooter}>
              <Ionicons name="heart-outline" size={16} color="#8A8A8A" />
              <Text style={styles.collectionFooterText}>LIKED (32)</Text>
            </View>
          </View>

          {/* Saved Collection Card - 2 images (1x2 grid) */}
          <View style={styles.collectionCard}>
            <View style={styles.thumbnailsGridSaved}>
              <Image 
                source={require('./assets/images/collection5.png')} 
                style={styles.thumbnailSaved}
              />
              <Image 
                source={require('./assets/images/collection6.png')} 
                style={styles.thumbnailSaved}
              />
            </View>
            <View style={styles.collectionFooter}>
              <Ionicons name="bookmark-outline" size={16} color="#8A8A8A" />
              <Text style={styles.collectionFooterText}>SAVED (23)</Text>
            </View>
          </View>

          {/* Files Collection Card - 4 images (2x2 grid but using different images) */}
          <View style={styles.collectionCard}>
  <View style={styles.thumbnailsGridFiles}>
    <View style={styles.filesLeftColumn}>
      <Image 
        source={require('./assets/images/collection7.png')} 
        style={styles.fileSmallImage}
      />
      <Image 
        source={require('./assets/images/collection7.png')} 
        style={styles.fileSmallImage}
      />
    </View>
    <View style={styles.filesRightColumn}>
      <Image 
        source={require('./assets/images/collection7.png')} 
        style={styles.fileLargeImage}
      />
    </View>
  </View>
  <View style={styles.collectionFooter}>
    <Ionicons name="folder-outline" size={16} color="#8A8A8A" />
    <Text style={styles.collectionFooterText}>FILES (3)</Text>
  </View>
          </View>
        </View>
      )}
      
      {/* Manage Tags Content */}
      {activeTab === 'manageTags' && (
        <View style={styles.manageTagsContainer}>
          <Text style={styles.recommendationHeader}>
            our recommendations work best when you
          </Text>
          <Text style={styles.recommendationSubheader}>
            let us know these things:
          </Text>
          
          <TouchableOpacity style={styles.tagSettingItem}>
            <View style={styles.tagSettingLeft}>
              <Text style={styles.tagSettingTitle}>YOUR DIFFICULTY ✨</Text>
              <Text style={styles.tagSettingDescription}>
                you decide the level of challenge you want!
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#6b7280" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tagSettingItem}>
            <View style={styles.tagSettingLeft}>
              <Text style={styles.tagSettingTitle}>INTERESTS YOU LIKE ✨</Text>
              <Text style={styles.tagSettingDescription}>
                we'll use these to show you cool builds
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#6b7280" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tagSettingItem}>
            <View style={styles.tagSettingLeft}>
              <Text style={styles.tagSettingTitle}>TOOLS USED ⚒️</Text>
              <Text style={styles.tagSettingDescription}>
                we'll suggest better using these picks.
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );png
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  profileContainer: {
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffd700',
    overflow: 'hidden',
    // Shadow properties for iOS
    shadowColor: '#10b981',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    // Shadow properties for Android
    elevation: 10,
    // This ensures the shadow is visible
    backgroundColor: 'transparent',
    // Add a small margin so shadow is visible
    margin: 5,
  },
  
  // You might also need to adjust the profile image to ensure it fills the container
  profileImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1e1e1e', // Add background color to prevent transparency issues
  },
  
  // If you're having issues with overflow on Android, consider using this wrapper
  profileImageWrapper: {
    marginTop: 10,
    marginLeft: 10,
  },
  profileActions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  profileInfo: {
    marginTop: 12,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  editButtonText: {
    color: 'gray',
    fontSize: 12,
    marginRight: 4,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  flagIcon: {
    width: 16,
    height: 12,
    marginRight: 4,
  },
  countryText: {
    color: '#6b7280',
    fontSize: 12,
  },
  bio: {
    color: '#d1d5db',
    fontSize: 14,
    marginTop: 8,
  },
  followingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  followingText: {
    color: '#d1d5db',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: 'bold',
  },
  followingLabel: {
    color: '#6b7280',
    fontSize: 12,
    marginLeft: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#10b981',
  },
  tabText: {
    color: '#6b7280',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  activeTabText: {
    color: '#10b981',
  },
  collectionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  collectionCard: {
    width: '46%',
    margin: '2%',
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnailsGrid: {
    width: '100%',
  },
  thumbnailRow: {
    flexDirection: 'row',
    height: 80,
  },
  thumbnail: {
    width: '50%',
    height: '100%',
  },
  // Specific styles for Saved card with 2 images
  thumbnailsGridSaved: {
    width: '100%',
    flexDirection: 'row',
    height: 160, // Taller than the other cards to match the image
  },
  thumbnailSaved: {
    width: '50%',
    height: '100%',
  },
  // Specific styles for Files card with 3 images
  thumbnailsGridFiles: {
    width: '100%',
  },
  fileRow: {
    flexDirection: 'row',
    height: 70,
  },
  fileImage: {
    flex: 1,
    height: '100%',
  },
  collectionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#232323',
  },
  collectionFooterText: {
    color: '#8A8A8A',
    fontSize: 12,
    marginLeft: 8,
  },
  manageTagsContainer: {
    flex: 1,
    padding: 16,
  },
  recommendationHeader: {
    color: 'white',
    fontSize: 16,
    opacity: 0.6,
  },
  recommendationSubheader: {
    color: 'white',
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 24,
  },
  tagSettingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tagSettingLeft: {
    flex: 1,
  },
  tagSettingTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tagSettingDescription: {
    color: '#9ca3af',
    fontSize: 12,
  },
  thumbnailsGridFiles: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
  },
  filesLeftColumn: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
  },
  filesRightColumn: {
    width: '50%',
    height: '100%',
  },
  fileSmallImage: {
    width: '100%',
    height: '50%',
  },
  fileLargeImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;