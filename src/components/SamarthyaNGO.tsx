import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SamarthyaNGO = () => {
  const [activeTab, setActiveTab] = useState('about');
  const navigation = useNavigation();
  
  const openLink = (url: string) => {
    Linking.openURL(url);
  };
  
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={20} color="#fff" />
      </TouchableOpacity>
      <Image
        source={{ uri: 'https://res.cloudinary.com/dpyficcwm/image/upload/v1741847550/samarthyaidimage_qyu0eb.webp' }} // Replace with actual banner image
        style={styles.bannerImage}
        resizeMode="cover"
      />
      <View style={styles.overlayContainer}>
        <View style={styles.ngoInfoOverlay}>
          <Text style={styles.ngoName}>Samarthya Kalyankari Sanstha</Text>
          <Text style={styles.ngoId}>NGO ID: MH-2017-0164886</Text>
          <Text style={styles.ngoEstablished}>Established: 2008</Text>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>#Children</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={16} color="#164860" />
            <Icon name="star" size={16} color="#164860" />
            <Icon name="star" size={16} color="#164860" />
            <Icon name="star" size={16} color="#164860" />
            <Icon name="star-half-o" size={16} color="#164860" />
            <Text style={styles.ratingText}> (4.5)</Text>
          </View>
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dpyficcwm/image/upload/v1741847678/samarthya_opy14x.jpg' }} // Replace with actual logo
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.donateButtonContainer}>
        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.donateButtonText}>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  const renderTabs = () => (
    <View style={styles.tabContainer}>
      <TouchableOpacity 
        style={[styles.tabButton, activeTab === 'about' && styles.activeTab]} 
        onPress={() => setActiveTab('about')}
      >
        <Text style={[styles.tabText, activeTab === 'about' && styles.activeTabText]}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.tabButton, activeTab === 'campaigns' && styles.activeTab]}
        onPress={() => setActiveTab('campaigns')}
      >
        <Text style={[styles.tabText, activeTab === 'campaigns' && styles.activeTabText]}>Campaigns</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.tabButton, activeTab === 'contact' && styles.activeTab]}
        onPress={() => setActiveTab('contact')}
      >
        <Text style={[styles.tabText, activeTab === 'contact' && styles.activeTabText]}>Contact</Text>
      </TouchableOpacity>
    </View>
  );

  const renderAboutContent = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.sectionTitle}>About NGO</Text>
      <Text style={styles.aboutText}>
        Samarthya is a development organization, working with marginalized communities 
        on access to quality primary education, strengthening and promoting community 
        based organisations, youth leadership and development, women and girls 
        empowerment and disaster risk reduction. It represents the conviction that every 
        individual is entitled to live in security, dignity and peace. Our existence is rooted in 
        our commitment to promote a democratic society, and enable marginalized groups 
        to access human rights. Samarthya was founded in 2008 under Bombay Public Trust 
        Act—1950 and Societies Registration Act—1860.
      </Text>
    </View>
  );

  const renderCampaignsContent = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.sectionTitle}>Top Stories</Text>
      
      <View style={styles.storyCard}>
        <Image
          source={{ uri: 'https://placekitten.com/300/200' }}
          style={styles.storyImage}
          resizeMode="cover"
        />
        <View style={styles.storyContent}>
          <Text style={styles.storyTitle}>Community education program</Text>
          <Text style={styles.storyDescription}>
            Supporting rural women's education initiatives across Maharashtra
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.storyCard}>
        <Image
          source={{ uri: 'https://placekitten.com/300/201' }}
          style={styles.storyImage}
          resizeMode="cover"
        />
        <View style={styles.storyContent}>
          <Text style={styles.storyTitle}>Youth leadership development</Text>
          <Text style={styles.storyDescription}>
            Building confidence and skills in rural youth to drive community change
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderContactContent = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.sectionTitle}>Contact</Text>
      
      <View style={styles.contactItem}>
        <Icon name="envelope" size={18} color="#64748B" style={styles.contactIcon} />
        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}>maha.samarthya@gmail.com</Text>
        </View>
      </View>
      
      <View style={styles.contactItem}>
        <Icon name="user" size={18} color="#64748B" style={styles.contactIcon} />
        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Authorized Person:</Text>
          <Text style={[styles.contactValue,styles.contactValueperson]}>Ranjita Pawar</Text>
        </View>
      </View>
      
      <View style={styles.contactItem}>
        <Icon name="phone" size={18} color="#64748B" style={styles.contactIcon} />
        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text 
            style={[styles.contactValue, styles.phoneLink]}
            onPress={() => Linking.openURL('tel:9765363734')}
          >
            9765363734
          </Text>
        </View>
      </View>
      
      <View style={styles.contactItem}>
        <Icon name="globe" size={18} color="#64748B" style={styles.contactIcon} />
        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Website:</Text>
          <Text 
            style={[styles.contactValue, styles.websiteLink]}
            onPress={() => openLink('https://www.mahasamarthya.org/')}
          >
            https://www.mahasamarthya.org/
          </Text>
        </View>
      </View>
      
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="youtube" size={24} color="#FF0000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="linkedin" size={24} color="#0077B5" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Icon name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.locationTitle}>Location</Text>
      <Text style={styles.locationText}>
        At Sardarnagar Post Kader Tal Omerga, Dist. Osmanabad, Maharashtra, 413606 India
      </Text>
      
      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: 'https://www.openstreetmap.org/export/embed.html?bbox=75.9,18.2,76.1,18.4&layer=mapnik&marker=18.3,76.0' }}
          style={styles.map}
        />
      </View>
    </View>
  );
  
  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return renderAboutContent();
      case 'campaigns':
        return renderCampaignsContent();
      case 'contact':
        return renderContactContent();
      default:
        return renderAboutContent();
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {renderHeader()}
        {renderTabs()}
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    position: 'relative',
    height: 220,
  },
  bannerImage: {
    width: '100%',
    height: 180,
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  ngoInfoOverlay: {
    marginLeft: 70,
  },
  ngoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E3E5C',
  },
  ngoId: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 3,
  },
  ngoEstablished: {
    fontSize: 12,
    color: '#64748B',
  },
  categoryContainer: {
    backgroundColor: '#E6F2FF',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 4,
  },
  categoryText: {
    color: '#0066CC',
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#64748B',
  },
  logoContainer: {
    position: 'absolute',
    left: 15,
    bottom: 40,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#EDF2F7',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  donateButtonContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  donateButton: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  donateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#00BFA6',
  },
  tabText: {
    fontSize: 14,
    color: '#64748B',
  },
  activeTabText: {
    color: '#00BFA6',
    fontWeight: 'bold',
  },
  contentContainer: {
    backgroundColor: 'white',
    margin: 12,
    padding: 16,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E3E5C',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#4A5568',
  },
  storyCard: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EDF2F7',
  },
  storyImage: {
    width: '100%',
    height: 160,
  },
  storyContent: {
    padding: 12,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E3E5C',
    marginBottom: 6,
  },
  storyDescription: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 10,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: '#0066CC',
    fontWeight: '500',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  contactIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: '#64748B',
  },
  contactValue: {
    fontSize: 14,
    color: '#00BFA6',
  },
  phoneLink: {
    color: '#0066CC',
  },
  websiteLink: {
    color: '#00BFA6',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  socialIcon: {
    marginRight: 20,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E3E5C',
    marginTop: 10,
    marginBottom: 6,
  },
  locationText: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 12,
  },
  mapContainer: {
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  map: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    borderRadius: 20,
  },
  contactValueperson:{
    color:'#64748B',
  }
});

export default SamarthyaNGO;