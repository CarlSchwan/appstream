var searchIndex = JSON.parse('{\
"appstream":{"doc":"Appstream","i":[[3,"Collection","appstream","",null,null],[12,"version","","",0,null],[12,"origin","","",0,null],[12,"components","","",0,null],[12,"architecture","","",0,null],[3,"Component","","",null,null],[12,"kind","","",1,null],[12,"id","","",1,null],[12,"name","","",1,null],[12,"summary","","",1,null],[12,"project_license","","",1,null],[12,"metadata_license","","",1,null],[12,"project_group","","",1,null],[12,"compulsory_for_desktop","","",1,null],[12,"extends","","",1,null],[12,"icons","","",1,null],[12,"screenshots","","",1,null],[12,"urls","","",1,null],[12,"developer_name","","",1,null],[12,"update_contact","","",1,null],[12,"categories","","",1,null],[12,"launchables","","",1,null],[12,"pkgname","","",1,null],[12,"source_pkgname","","",1,null],[12,"bundles","","",1,null],[12,"releases","","",1,null],[12,"languages","","",1,null],[12,"mimetypes","","",1,null],[12,"kudos","","",1,null],[12,"keywords","","",1,null],[12,"content_rating","","",1,null],[12,"provides","","",1,null],[12,"translations","","",1,null],[0,"builders","","",null,null],[3,"ArtifactBuilder","appstream::builders","",null,null],[12,"platform","","",2,null],[12,"kind","","",2,null],[12,"sizes","","",2,null],[12,"url","","",2,null],[12,"checksums","","",2,null],[12,"bundles","","",2,null],[3,"CollectionBuilder","","",null,null],[12,"version","","",3,null],[12,"origin","","",3,null],[12,"components","","",3,null],[12,"architecture","","",3,null],[3,"ComponentBuilder","","",null,null],[12,"kind","","",4,null],[12,"id","","",4,null],[12,"name","","",4,null],[12,"summary","","",4,null],[12,"description","","",4,null],[12,"project_license","","",4,null],[12,"metadata_license","","",4,null],[12,"project_group","","",4,null],[12,"compulsory_for_desktop","","",4,null],[12,"extends","","",4,null],[12,"icons","","",4,null],[12,"screenshots","","",4,null],[12,"urls","","",4,null],[12,"developer_name","","",4,null],[12,"update_contact","","",4,null],[12,"categories","","",4,null],[12,"launchables","","",4,null],[12,"pkgname","","",4,null],[12,"bundles","","",4,null],[12,"releases","","",4,null],[12,"languages","","",4,null],[12,"mimetypes","","",4,null],[12,"kudos","","",4,null],[12,"keywords","","",4,null],[12,"content_rating","","",4,null],[12,"provides","","",4,null],[12,"translations","","",4,null],[12,"source_pkgname","","",4,null],[3,"ImageBuilder","","",null,null],[12,"width","","",5,null],[12,"height","","",5,null],[12,"url","","",5,null],[12,"kind","","",5,null],[3,"LanguageBuilder","","",null,null],[12,"percentage","","",6,null],[12,"locale","","",6,null],[3,"ReleaseBuilder","","",null,null],[12,"date","","",7,null],[12,"date_eol","","",7,null],[12,"version","","",7,null],[12,"kind","","",7,null],[12,"sizes","","",7,null],[12,"urgency","","",7,null],[12,"artifacts","","",7,null],[12,"url","","",7,null],[3,"ScreenshotBuilder","","",null,null],[12,"is_default","","",8,null],[12,"caption","","",8,null],[12,"images","","",8,null],[12,"videos","","",8,null],[3,"VideoBuilder","","",null,null],[12,"width","","",9,null],[12,"height","","",9,null],[12,"codec","","",9,null],[12,"container","","",9,null],[12,"url","","",9,null],[11,"new","","",2,[[["url",3],["artifactkind",4]]]],[11,"bundle","","",2,[[["bundle",4]]]],[11,"size","","",2,[[["size",4]]]],[11,"checksum","","",2,[[["checksum",4]]]],[11,"platform","","",2,[[]]],[11,"build","","",2,[[],["artifact",3]]],[11,"new","","",3,[[]]],[11,"architecture","","",3,[[]]],[11,"origin","","",3,[[]]],[11,"component","","",3,[[["component",3]]]],[11,"build","","",3,[[],["collection",3]]],[11,"new","","",4,[[["appid",3],["translatablestring",3]]]],[11,"content_rating","","",4,[[["contentrating",3]]]],[11,"kind","","",4,[[["componentkind",4]]]],[11,"developer_name","","",4,[[["translatablestring",3]]]],[11,"summary","","",4,[[["translatablestring",3]]]],[11,"description","","",4,[[["translatablestring",3]]]],[11,"metadata_license","","",4,[[["license",3]]]],[11,"project_license","","",4,[[["license",3]]]],[11,"keywords","","",4,[[["translatablevec",3]]]],[11,"project_group","","",4,[[]]],[11,"url","","",4,[[["projecturl",4]]]],[11,"screenshot","","",4,[[["screenshot",3]]]],[11,"icon","","",4,[[["icon",4]]]],[11,"kudo","","",4,[[["kudo",4]]]],[11,"translation","","",4,[[["translation",4]]]],[11,"bundle","","",4,[[["bundle",4]]]],[11,"language","","",4,[[["language",3]]]],[11,"category","","",4,[[["category",4]]]],[11,"mimetype","","",4,[[]]],[11,"extend","","",4,[[["appid",3]]]],[11,"release","","",4,[[["release",3]]]],[11,"launchable","","",4,[[["launchable",4]]]],[11,"provide","","",4,[[["provide",4]]]],[11,"pkgname","","",4,[[]]],[11,"source_pkgname","","",4,[[]]],[11,"update_contact","","",4,[[]]],[11,"build","","",4,[[],["component",3]]],[11,"new","","",5,[[["url",3]]]],[11,"kind","","",5,[[["imagekind",4]]]],[11,"width","","",5,[[]]],[11,"height","","",5,[[]]],[11,"build","","",5,[[],["image",3]]],[11,"new","","",6,[[]]],[11,"percentage","","",6,[[]]],[11,"build","","",6,[[],["language",3]]],[11,"new","","",7,[[]]],[11,"url","","",7,[[["url",3]]]],[11,"urgency","","",7,[[["releaseurgency",4]]]],[11,"date","","",7,[[["datetime",3],["utc",3]]]],[11,"date_eol","","",7,[[["datetime",3],["utc",3]]]],[11,"kind","","",7,[[["releasekind",4]]]],[11,"sizes","","",7,[[["vec",3],["size",4]]]],[11,"artifact","","",7,[[["artifact",3]]]],[11,"build","","",7,[[],["release",3]]],[11,"new","","",8,[[]]],[11,"caption","","",8,[[["translatablestring",3]]]],[11,"set_default","","",8,[[]]],[11,"image","","",8,[[["image",3]]]],[11,"images","","",8,[[["vec",3],["image",3]]]],[11,"video","","",8,[[["video",3]]]],[11,"videos","","",8,[[["vec",3],["video",3]]]],[11,"build","","",8,[[],["screenshot",3]]],[11,"new","","",9,[[["url",3]]]],[11,"width","","",9,[[]]],[11,"height","","",9,[[]]],[11,"container","","",9,[[]]],[11,"codec","","",9,[[]]],[11,"build","","",9,[[],["video",3]]],[11,"from_path","appstream","",0,[[["pathbuf",3]],["result",6]]],[11,"from_gzipped","","",0,[[["pathbuf",3]],["result",6]]],[11,"find_by_id","","",0,[[["appid",3]],[["component",3],["vec",3]]]],[11,"from_path","","",1,[[["pathbuf",3]],["result",6]]],[11,"from_gzipped","","",1,[[["pathbuf",3]],["result",6]]],[0,"enums","","",null,null],[4,"ArtifactKind","appstream::enums","",null,null],[13,"Source","","",10,null],[13,"Binary","","",10,null],[4,"Bundle","","",null,null],[13,"Limba","","",11,null],[13,"Flatpak","","",11,null],[12,"runtime","appstream::enums::Bundle","",12,null],[12,"sdk","","",12,null],[12,"id","","",12,null],[13,"AppImage","appstream::enums","",11,null],[13,"Snap","","",11,null],[13,"Tarball","","",11,null],[4,"Category","","",null,null],[13,"AudioVideo","","",13,null],[13,"Audio","","",13,null],[13,"Video","","",13,null],[13,"Development","","",13,null],[13,"Education","","",13,null],[13,"Game","","",13,null],[13,"Graphics","","",13,null],[13,"Network","","",13,null],[13,"Office","","",13,null],[13,"Science","","",13,null],[13,"Settings","","",13,null],[13,"System","","",13,null],[13,"Utility","","",13,null],[13,"Building","","",13,null],[13,"Debugger","","",13,null],[13,"IDE","","",13,null],[13,"GUIDesigner","","",13,null],[13,"Profiling","","",13,null],[13,"RevisionControl","","",13,null],[13,"Translation","","",13,null],[13,"Calendar","","",13,null],[13,"ContactManagement","","",13,null],[13,"Database","","",13,null],[13,"Dictionnary","","",13,null],[13,"Chart","","",13,null],[13,"Email","","",13,null],[13,"Finance","","",13,null],[13,"FlowChart","","",13,null],[13,"PDA","","",13,null],[13,"ProjectManagement","","",13,null],[13,"Presentation","","",13,null],[13,"Spreadsheet","","",13,null],[13,"WordProcessor","","",13,null],[13,"TwoDGraphics","","",13,null],[13,"VectorGraphics","","",13,null],[13,"RasterGraphics","","",13,null],[13,"ThreeDGraphics","","",13,null],[13,"Scanning","","",13,null],[13,"OCR","","",13,null],[13,"Photography","","",13,null],[13,"Publishing","","",13,null],[13,"Viewer","","",13,null],[13,"TextTools","","",13,null],[13,"DesktopSettings","","",13,null],[13,"HardwareSettings","","",13,null],[13,"Printing","","",13,null],[13,"PackageManager","","",13,null],[13,"Dialup","","",13,null],[13,"InstantMessaging","","",13,null],[13,"Chat","","",13,null],[13,"IRCClient","","",13,null],[13,"Feed","","",13,null],[13,"HamRadio","","",13,null],[13,"News","","",13,null],[13,"P2P","","",13,null],[13,"RemoteAccess","","",13,null],[13,"Telephony","","",13,null],[13,"TelephonyTools","","",13,null],[13,"VideoConference","","",13,null],[13,"WebBrowser","","",13,null],[13,"WebDevelopment","","",13,null],[13,"Midi","","",13,null],[13,"Mixer","","",13,null],[13,"Sequencer","","",13,null],[13,"Tuner","","",13,null],[13,"TV","","",13,null],[13,"AudioVideoEditing","","",13,null],[13,"Player","","",13,null],[13,"Recorder","","",13,null],[13,"DiscBurning","","",13,null],[13,"ActionGame","","",13,null],[13,"AdventureGame","","",13,null],[13,"ArcadeGame","","",13,null],[13,"BoardGame","","",13,null],[13,"BlocksGame","","",13,null],[13,"CardGame","","",13,null],[13,"KidsGame","","",13,null],[13,"LogicGame","","",13,null],[13,"RolePlaying","","",13,null],[13,"Shooter","","",13,null],[13,"Simulation","","",13,null],[13,"SportsGame","","",13,null],[13,"StrategyGame","","",13,null],[13,"Art","","",13,null],[13,"Construction","","",13,null],[13,"Music","","",13,null],[13,"Languages","","",13,null],[13,"ArtificialIntelligence","","",13,null],[13,"Astronomy","","",13,null],[13,"Biology","","",13,null],[13,"Chemistry","","",13,null],[13,"ComputerScience","","",13,null],[13,"DataVisualization","","",13,null],[13,"Economy","","",13,null],[13,"Electricity","","",13,null],[13,"Geography","","",13,null],[13,"Geology","","",13,null],[13,"Geoscience","","",13,null],[13,"History","","",13,null],[13,"Humanities","","",13,null],[13,"ImageProcessing","","",13,null],[13,"Literature","","",13,null],[13,"Maps","","",13,null],[13,"Math","","",13,null],[13,"NumericalAnalysis","","",13,null],[13,"MedicalSoftware","","",13,null],[13,"Physics","","",13,null],[13,"Robotics","","",13,null],[13,"Spirituality","","",13,null],[13,"Sports","","",13,null],[13,"ParallelComputing","","",13,null],[13,"Amusement","","",13,null],[13,"Archiving","","",13,null],[13,"Compression","","",13,null],[13,"Electronics","","",13,null],[13,"Emulator","","",13,null],[13,"Engineering","","",13,null],[13,"FileTools","","",13,null],[13,"FileManager","","",13,null],[13,"TerminalEmulator","","",13,null],[13,"FileTransfer","","",13,null],[13,"Filesystem","","",13,null],[13,"Monitor","","",13,null],[13,"Security","","",13,null],[13,"Accessibility","","",13,null],[13,"Calculator","","",13,null],[13,"Clock","","",13,null],[13,"TextEditor","","",13,null],[13,"Documentation","","",13,null],[13,"Adult","","",13,null],[13,"Core","","",13,null],[13,"KDE","","",13,null],[13,"GNOME","","",13,null],[13,"XFCE","","",13,null],[13,"GTK","","",13,null],[13,"Qt","","",13,null],[13,"Motif","","",13,null],[13,"Java","","",13,null],[13,"ConsoleOnly","","",13,null],[13,"Screensaver","","",13,null],[13,"TrayIcon","","",13,null],[13,"Applet","","",13,null],[13,"Shell","","",13,null],[13,"Unknown","","",13,null],[4,"Checksum","","",null,null],[13,"Sha1","","",14,null],[13,"Sha256","","",14,null],[13,"Blake2b","","",14,null],[13,"Blake2s","","",14,null],[4,"ComponentKind","","",null,null],[13,"Runtime","","",15,null],[13,"ConsoleApplication","","",15,null],[13,"DesktopApplication","","",15,null],[13,"WebApplication","","",15,null],[13,"InputMethod","","",15,null],[13,"OS","","",15,null],[13,"Theme","","",15,null],[13,"Firmware","","",15,null],[13,"Addon","","",15,null],[13,"Font","","",15,null],[13,"Generic","","",15,null],[13,"IconTheme","","",15,null],[13,"Localization","","",15,null],[13,"Driver","","",15,null],[13,"Codec","","",15,null],[4,"ContentAttribute","","",null,null],[13,"ViolenceCartoon","","",16,null],[13,"ViolenceFantasy","","",16,null],[13,"ViolenceFealistic","","",16,null],[13,"ViolenceBloodshed","","",16,null],[13,"ViolenceSexual","","",16,null],[13,"ViolenceDesecration","","",16,null],[13,"ViolenceSlavery","","",16,null],[13,"ViolenceRealistic","","",16,null],[13,"ViolenceWorship","","",16,null],[13,"DrugsAlcohol","","",16,null],[13,"DrugsNarcotics","","",16,null],[13,"DrugsTobacco","","",16,null],[13,"SexNudity","","",16,null],[13,"SexThemes","","",16,null],[13,"SexHomosexuality","","",16,null],[13,"SexProstitution","","",16,null],[13,"SexAdultery","","",16,null],[13,"SexAppearance","","",16,null],[13,"LanguageProfanity","","",16,null],[13,"LanguageHumor","","",16,null],[13,"LanguageDiscrimination","","",16,null],[13,"SocialChat","","",16,null],[13,"SocialInfo","","",16,null],[13,"SocialAudio","","",16,null],[13,"SocialLocation","","",16,null],[13,"SocialContacts","","",16,null],[13,"MoneyAdvertising","","",16,null],[13,"MoneyPurchasing","","",16,null],[13,"MoneyGambling","","",16,null],[4,"ContentRatingVersion","","",null,null],[13,"Oars1_0","","",17,null],[13,"Oars1_1","","",17,null],[13,"Unknown","","",17,null],[4,"ContentState","","",null,null],[13,"None","","",18,null],[13,"Mild","","",18,null],[13,"Moderate","","",18,null],[13,"Intense","","",18,null],[4,"Icon","","",null,null],[13,"Stock","","",19,null],[13,"Cached","","",19,null],[12,"path","appstream::enums::Icon","",20,null],[12,"width","","",20,null],[12,"height","","",20,null],[13,"Remote","appstream::enums","",19,null],[12,"url","appstream::enums::Icon","",21,null],[12,"width","","",21,null],[12,"height","","",21,null],[13,"Local","appstream::enums","",19,null],[12,"path","appstream::enums::Icon","",22,null],[12,"width","","",22,null],[12,"height","","",22,null],[4,"ImageKind","appstream::enums","",null,null],[13,"Source","","",23,null],[13,"Thumbnail","","",23,null],[4,"Kudo","","",null,null],[13,"AppMenu","","",24,null],[13,"HiDpiIcon","","",24,null],[13,"HighContrast","","",24,null],[13,"ModernToolkit","","",24,null],[13,"Notifications","","",24,null],[13,"SearchProvider","","",24,null],[13,"UserDocs","","",24,null],[4,"Launchable","","",null,null],[13,"DesktopId","","",25,null],[13,"Service","","",25,null],[13,"Url","","",25,null],[13,"CockpitManifest","","",25,null],[13,"Unknown","","",25,null],[4,"ProjectUrl","","",null,null],[13,"Donation","","",26,null],[13,"Translate","","",26,null],[13,"Homepage","","",26,null],[13,"BugTracker","","",26,null],[13,"Help","","",26,null],[13,"Faq","","",26,null],[13,"Contact","","",26,null],[13,"Unknown","","",26,null],[4,"ReleaseKind","","",null,null],[13,"Stable","","",27,null],[13,"Development","","",27,null],[4,"Size","","",null,null],[13,"Download","","",28,null],[13,"Installed","","",28,null],[4,"ReleaseUrgency","","",null,null],[13,"Low","","",29,null],[13,"Medium","","",29,null],[13,"High","","",29,null],[13,"Critical","","",29,null],[4,"FirmwareKind","","",null,null],[13,"Flashed","","",30,null],[13,"Runtime","","",30,null],[4,"Provide","","",null,null],[13,"Library","","",31,null],[13,"Binary","","",31,null],[13,"Font","","",31,null],[13,"Modalias","","",31,null],[13,"Firmware","","",31,null],[12,"kind","appstream::enums::Provide","",32,null],[12,"item","","",32,null],[13,"Python2","appstream::enums","",31,null],[13,"Python3","","",31,null],[13,"DBus","","",31,null],[13,"Id","","",31,null],[13,"Codec","","",31,null],[4,"Translation","","",null,null],[13,"Gettext","","",33,null],[13,"Qt","","",33,null],[13,"Unknown","","",33,null],[0,"types","appstream","",null,null],[3,"AppId","appstream::types","",null,null],[12,"0","","",34,null],[3,"ContentRating","","",null,null],[12,"version","","",35,null],[12,"attributes","","",35,null],[3,"Language","","",null,null],[12,"percentage","","",36,null],[12,"locale","","",36,null],[3,"License","","",null,null],[12,"0","","",37,null],[3,"Artifact","","",null,null],[12,"platform","","",38,null],[12,"kind","","",38,null],[12,"sizes","","",38,null],[12,"url","","",38,null],[12,"checksums","","",38,null],[12,"bundles","","",38,null],[3,"Release","","",null,null],[12,"date","","",39,null],[12,"date_eol","","",39,null],[12,"version","","",39,null],[12,"kind","","",39,null],[12,"sizes","","",39,null],[12,"urgency","","",39,null],[12,"artifacts","","",39,null],[12,"url","","",39,null],[3,"Image","","",null,null],[12,"kind","","",40,null],[12,"width","","",40,null],[12,"height","","",40,null],[12,"url","","",40,null],[3,"Screenshot","","",null,null],[12,"is_default","","",41,null],[12,"caption","","",41,null],[12,"images","","",41,null],[12,"videos","","",41,null],[3,"Video","","",null,null],[12,"width","","",42,null],[12,"height","","",42,null],[12,"codec","","",42,null],[12,"container","","",42,null],[12,"url","","",42,null],[3,"TranslatableString","","",null,null],[12,"0","","",43,null],[3,"TranslatableVec","","",null,null],[12,"0","","",44,null],[11,"from","appstream","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","appstream::types","",34,[[]]],[11,"into","","",34,[[]]],[11,"to_owned","","",34,[[]]],[11,"clone_into","","",34,[[]]],[11,"to_string","","",34,[[],["string",3]]],[11,"try_from","","",34,[[],["result",4]]],[11,"try_into","","",34,[[],["result",4]]],[11,"borrow","","",34,[[]]],[11,"borrow_mut","","",34,[[]]],[11,"type_id","","",34,[[],["typeid",3]]],[11,"from","appstream::builders","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","appstream::types","",35,[[]]],[11,"into","","",35,[[]]],[11,"to_owned","","",35,[[]]],[11,"clone_into","","",35,[[]]],[11,"try_from","","",35,[[],["result",4]]],[11,"try_into","","",35,[[],["result",4]]],[11,"borrow","","",35,[[]]],[11,"borrow_mut","","",35,[[]]],[11,"type_id","","",35,[[],["typeid",3]]],[11,"from","appstream::enums","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_owned","","",25,[[]]],[11,"clone_into","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"to_owned","","",26,[[]]],[11,"clone_into","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"to_owned","","",27,[[]]],[11,"clone_into","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"to_owned","","",28,[[]]],[11,"clone_into","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"from","","",29,[[]]],[11,"into","","",29,[[]]],[11,"to_owned","","",29,[[]]],[11,"clone_into","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"from","","",30,[[]]],[11,"into","","",30,[[]]],[11,"to_owned","","",30,[[]]],[11,"clone_into","","",30,[[]]],[11,"try_from","","",30,[[],["result",4]]],[11,"try_into","","",30,[[],["result",4]]],[11,"borrow","","",30,[[]]],[11,"borrow_mut","","",30,[[]]],[11,"type_id","","",30,[[],["typeid",3]]],[11,"from","","",31,[[]]],[11,"into","","",31,[[]]],[11,"to_owned","","",31,[[]]],[11,"clone_into","","",31,[[]]],[11,"try_from","","",31,[[],["result",4]]],[11,"try_into","","",31,[[],["result",4]]],[11,"borrow","","",31,[[]]],[11,"borrow_mut","","",31,[[]]],[11,"type_id","","",31,[[],["typeid",3]]],[11,"from","","",33,[[]]],[11,"into","","",33,[[]]],[11,"to_owned","","",33,[[]]],[11,"clone_into","","",33,[[]]],[11,"try_from","","",33,[[],["result",4]]],[11,"try_into","","",33,[[],["result",4]]],[11,"borrow","","",33,[[]]],[11,"borrow_mut","","",33,[[]]],[11,"type_id","","",33,[[],["typeid",3]]],[11,"from","appstream::types","",36,[[]]],[11,"into","","",36,[[]]],[11,"to_owned","","",36,[[]]],[11,"clone_into","","",36,[[]]],[11,"try_from","","",36,[[],["result",4]]],[11,"try_into","","",36,[[],["result",4]]],[11,"borrow","","",36,[[]]],[11,"borrow_mut","","",36,[[]]],[11,"type_id","","",36,[[],["typeid",3]]],[11,"from","","",37,[[]]],[11,"into","","",37,[[]]],[11,"to_owned","","",37,[[]]],[11,"clone_into","","",37,[[]]],[11,"to_string","","",37,[[],["string",3]]],[11,"try_from","","",37,[[],["result",4]]],[11,"try_into","","",37,[[],["result",4]]],[11,"borrow","","",37,[[]]],[11,"borrow_mut","","",37,[[]]],[11,"type_id","","",37,[[],["typeid",3]]],[11,"from","","",39,[[]]],[11,"into","","",39,[[]]],[11,"to_owned","","",39,[[]]],[11,"clone_into","","",39,[[]]],[11,"try_from","","",39,[[],["result",4]]],[11,"try_into","","",39,[[],["result",4]]],[11,"borrow","","",39,[[]]],[11,"borrow_mut","","",39,[[]]],[11,"type_id","","",39,[[],["typeid",3]]],[11,"from","","",38,[[]]],[11,"into","","",38,[[]]],[11,"to_owned","","",38,[[]]],[11,"clone_into","","",38,[[]]],[11,"try_from","","",38,[[],["result",4]]],[11,"try_into","","",38,[[],["result",4]]],[11,"borrow","","",38,[[]]],[11,"borrow_mut","","",38,[[]]],[11,"type_id","","",38,[[],["typeid",3]]],[11,"from","","",41,[[]]],[11,"into","","",41,[[]]],[11,"to_owned","","",41,[[]]],[11,"clone_into","","",41,[[]]],[11,"try_from","","",41,[[],["result",4]]],[11,"try_into","","",41,[[],["result",4]]],[11,"borrow","","",41,[[]]],[11,"borrow_mut","","",41,[[]]],[11,"type_id","","",41,[[],["typeid",3]]],[11,"from","","",42,[[]]],[11,"into","","",42,[[]]],[11,"to_owned","","",42,[[]]],[11,"clone_into","","",42,[[]]],[11,"try_from","","",42,[[],["result",4]]],[11,"try_into","","",42,[[],["result",4]]],[11,"borrow","","",42,[[]]],[11,"borrow_mut","","",42,[[]]],[11,"type_id","","",42,[[],["typeid",3]]],[11,"from","","",40,[[]]],[11,"into","","",40,[[]]],[11,"to_owned","","",40,[[]]],[11,"clone_into","","",40,[[]]],[11,"try_from","","",40,[[],["result",4]]],[11,"try_into","","",40,[[],["result",4]]],[11,"borrow","","",40,[[]]],[11,"borrow_mut","","",40,[[]]],[11,"type_id","","",40,[[],["typeid",3]]],[11,"from","","",43,[[]]],[11,"into","","",43,[[]]],[11,"to_owned","","",43,[[]]],[11,"clone_into","","",43,[[]]],[11,"try_from","","",43,[[],["result",4]]],[11,"try_into","","",43,[[],["result",4]]],[11,"borrow","","",43,[[]]],[11,"borrow_mut","","",43,[[]]],[11,"type_id","","",43,[[],["typeid",3]]],[11,"from","","",44,[[]]],[11,"into","","",44,[[]]],[11,"to_owned","","",44,[[]]],[11,"clone_into","","",44,[[]]],[11,"try_from","","",44,[[],["result",4]]],[11,"try_into","","",44,[[],["result",4]]],[11,"borrow","","",44,[[]]],[11,"borrow_mut","","",44,[[]]],[11,"type_id","","",44,[[],["typeid",3]]],[11,"from","","",34,[[]]],[11,"from","","",34,[[["string",3]]]],[11,"from","","",37,[[]]],[11,"into","","",34,[[],["string",3]]],[11,"into","","",37,[[],["string",3]]],[11,"clone","","",34,[[],["appid",3]]],[11,"clone","appstream","",0,[[],["collection",3]]],[11,"clone","","",1,[[],["component",3]]],[11,"clone","appstream::types","",35,[[],["contentrating",3]]],[11,"clone","appstream::enums","",10,[[],["artifactkind",4]]],[11,"clone","","",11,[[],["bundle",4]]],[11,"clone","","",13,[[],["category",4]]],[11,"clone","","",14,[[],["checksum",4]]],[11,"clone","","",15,[[],["componentkind",4]]],[11,"clone","","",16,[[],["contentattribute",4]]],[11,"clone","","",17,[[],["contentratingversion",4]]],[11,"clone","","",18,[[],["contentstate",4]]],[11,"clone","","",19,[[],["icon",4]]],[11,"clone","","",23,[[],["imagekind",4]]],[11,"clone","","",24,[[],["kudo",4]]],[11,"clone","","",25,[[],["launchable",4]]],[11,"clone","","",26,[[],["projecturl",4]]],[11,"clone","","",27,[[],["releasekind",4]]],[11,"clone","","",28,[[],["size",4]]],[11,"clone","","",29,[[],["releaseurgency",4]]],[11,"clone","","",30,[[],["firmwarekind",4]]],[11,"clone","","",31,[[],["provide",4]]],[11,"clone","","",33,[[],["translation",4]]],[11,"clone","appstream::types","",36,[[],["language",3]]],[11,"clone","","",37,[[],["license",3]]],[11,"clone","","",39,[[],["release",3]]],[11,"clone","","",38,[[],["artifact",3]]],[11,"clone","","",41,[[],["screenshot",3]]],[11,"clone","","",42,[[],["video",3]]],[11,"clone","","",40,[[],["image",3]]],[11,"clone","","",43,[[],["translatablestring",3]]],[11,"clone","","",44,[[],["translatablevec",3]]],[11,"default","appstream::builders","",8,[[]]],[11,"default","appstream::enums","",15,[[]]],[11,"default","","",17,[[]]],[11,"default","","",27,[[]]],[11,"default","","",29,[[]]],[11,"default","appstream::types","",36,[[],["language",3]]],[11,"default","","",41,[[]]],[11,"default","","",43,[[]]],[11,"default","","",44,[[],["translatablevec",3]]],[11,"cmp","appstream::enums","",17,[[],["ordering",4]]],[11,"eq","appstream::types","",34,[[["appid",3]]]],[11,"ne","","",34,[[["appid",3]]]],[11,"eq","appstream","",0,[[["collection",3]]]],[11,"ne","","",0,[[["collection",3]]]],[11,"eq","","",1,[[["component",3]]]],[11,"ne","","",1,[[["component",3]]]],[11,"eq","appstream::types","",35,[[["contentrating",3]]]],[11,"ne","","",35,[[["contentrating",3]]]],[11,"eq","appstream::enums","",10,[[["artifactkind",4]]]],[11,"eq","","",11,[[["bundle",4]]]],[11,"ne","","",11,[[["bundle",4]]]],[11,"eq","","",13,[[["category",4]]]],[11,"ne","","",13,[[["category",4]]]],[11,"eq","","",14,[[["checksum",4]]]],[11,"ne","","",14,[[["checksum",4]]]],[11,"eq","","",15,[[["componentkind",4]]]],[11,"eq","","",16,[[["contentattribute",4]]]],[11,"ne","","",16,[[["contentattribute",4]]]],[11,"eq","","",17,[[["contentratingversion",4]]]],[11,"eq","","",18,[[["contentstate",4]]]],[11,"eq","","",19,[[["icon",4]]]],[11,"ne","","",19,[[["icon",4]]]],[11,"eq","","",23,[[["imagekind",4]]]],[11,"eq","","",24,[[["kudo",4]]]],[11,"eq","","",25,[[["launchable",4]]]],[11,"ne","","",25,[[["launchable",4]]]],[11,"eq","","",26,[[["projecturl",4]]]],[11,"ne","","",26,[[["projecturl",4]]]],[11,"eq","","",27,[[["releasekind",4]]]],[11,"eq","","",28,[[["size",4]]]],[11,"ne","","",28,[[["size",4]]]],[11,"eq","","",29,[[["releaseurgency",4]]]],[11,"eq","","",30,[[["firmwarekind",4]]]],[11,"eq","","",31,[[["provide",4]]]],[11,"ne","","",31,[[["provide",4]]]],[11,"eq","","",33,[[["translation",4]]]],[11,"ne","","",33,[[["translation",4]]]],[11,"eq","appstream::types","",36,[[["language",3]]]],[11,"ne","","",36,[[["language",3]]]],[11,"eq","","",37,[[["license",3]]]],[11,"ne","","",37,[[["license",3]]]],[11,"eq","","",39,[[["release",3]]]],[11,"ne","","",39,[[["release",3]]]],[11,"eq","","",38,[[["artifact",3]]]],[11,"ne","","",38,[[["artifact",3]]]],[11,"eq","","",41,[[["screenshot",3]]]],[11,"ne","","",41,[[["screenshot",3]]]],[11,"eq","","",42,[[["video",3]]]],[11,"ne","","",42,[[["video",3]]]],[11,"eq","","",40,[[["image",3]]]],[11,"ne","","",40,[[["image",3]]]],[11,"eq","","",43,[[["translatablestring",3]]]],[11,"ne","","",43,[[["translatablestring",3]]]],[11,"eq","","",44,[[["translatablevec",3]]]],[11,"ne","","",44,[[["translatablevec",3]]]],[11,"partial_cmp","appstream::enums","",17,[[],[["ordering",4],["option",4]]]],[11,"to_string","appstream::types","",34,[[],["string",3]]],[11,"to_string","","",37,[[],["string",3]]],[11,"fmt","","",34,[[["formatter",3]],["result",6]]],[11,"fmt","appstream","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","appstream::types","",35,[[["formatter",3]],["result",6]]],[11,"fmt","appstream::enums","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",24,[[["formatter",3]],["result",6]]],[11,"fmt","","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]],[11,"fmt","","",27,[[["formatter",3]],["result",6]]],[11,"fmt","","",28,[[["formatter",3]],["result",6]]],[11,"fmt","","",29,[[["formatter",3]],["result",6]]],[11,"fmt","","",30,[[["formatter",3]],["result",6]]],[11,"fmt","","",31,[[["formatter",3]],["result",6]]],[11,"fmt","","",33,[[["formatter",3]],["result",6]]],[11,"fmt","appstream::types","",36,[[["formatter",3]],["result",6]]],[11,"fmt","","",37,[[["formatter",3]],["result",6]]],[11,"fmt","","",39,[[["formatter",3]],["result",6]]],[11,"fmt","","",38,[[["formatter",3]],["result",6]]],[11,"fmt","","",41,[[["formatter",3]],["result",6]]],[11,"fmt","","",42,[[["formatter",3]],["result",6]]],[11,"fmt","","",40,[[["formatter",3]],["result",6]]],[11,"fmt","","",43,[[["formatter",3]],["result",6]]],[11,"fmt","","",44,[[["formatter",3]],["result",6]]],[11,"from_str","appstream::enums","",13,[[],[["result",4],["category",4]]]],[11,"from_str","","",24,[[],[["kudo",4],["result",4]]]],[11,"serialize","appstream::types","",34,[[],["result",4]]],[11,"serialize","appstream","",1,[[],["result",4]]],[11,"serialize","appstream::types","",35,[[],["result",4]]],[11,"serialize","appstream::enums","",10,[[],["result",4]]],[11,"serialize","","",11,[[],["result",4]]],[11,"serialize","","",13,[[],["result",4]]],[11,"serialize","","",14,[[],["result",4]]],[11,"serialize","","",15,[[],["result",4]]],[11,"serialize","","",16,[[],["result",4]]],[11,"serialize","","",17,[[],["result",4]]],[11,"serialize","","",18,[[],["result",4]]],[11,"serialize","","",19,[[],["result",4]]],[11,"serialize","","",23,[[],["result",4]]],[11,"serialize","","",24,[[],["result",4]]],[11,"serialize","","",25,[[],["result",4]]],[11,"serialize","","",26,[[],["result",4]]],[11,"serialize","","",27,[[],["result",4]]],[11,"serialize","","",28,[[],["result",4]]],[11,"serialize","","",29,[[],["result",4]]],[11,"serialize","","",30,[[],["result",4]]],[11,"serialize","","",31,[[],["result",4]]],[11,"serialize","","",33,[[],["result",4]]],[11,"serialize","appstream::types","",36,[[],["result",4]]],[11,"serialize","","",37,[[],["result",4]]],[11,"serialize","","",39,[[],["result",4]]],[11,"serialize","","",38,[[],["result",4]]],[11,"serialize","","",41,[[],["result",4]]],[11,"serialize","","",42,[[],["result",4]]],[11,"serialize","","",40,[[],["result",4]]],[11,"serialize","","",43,[[],["result",4]]],[11,"serialize","","",44,[[],["result",4]]],[11,"deserialize","","",34,[[],["result",4]]],[11,"deserialize","appstream","",0,[[],["result",4]]],[11,"deserialize","","",1,[[],["result",4]]],[11,"deserialize","appstream::types","",35,[[],["result",4]]],[11,"deserialize","appstream::enums","",10,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]],[11,"deserialize","","",14,[[],["result",4]]],[11,"deserialize","","",15,[[],["result",4]]],[11,"deserialize","","",16,[[],["result",4]]],[11,"deserialize","","",17,[[],["result",4]]],[11,"deserialize","","",18,[[],["result",4]]],[11,"deserialize","","",19,[[],["result",4]]],[11,"deserialize","","",23,[[],["result",4]]],[11,"deserialize","","",24,[[],["result",4]]],[11,"deserialize","","",27,[[],["result",4]]],[11,"deserialize","","",28,[[],["result",4]]],[11,"deserialize","","",29,[[],["result",4]]],[11,"deserialize","","",30,[[],["result",4]]],[11,"deserialize","","",31,[[],["result",4]]],[11,"deserialize","","",33,[[],["result",4]]],[11,"deserialize","appstream::types","",36,[[],["result",4]]],[11,"deserialize","","",37,[[],["result",4]]],[11,"deserialize","","",39,[[],["result",4]]],[11,"deserialize","","",38,[[],["result",4]]],[11,"deserialize","","",41,[[],["result",4]]],[11,"deserialize","","",42,[[],["result",4]]],[11,"deserialize","","",40,[[],["result",4]]],[11,"with_default","","",43,[[]]],[11,"and_locale","","",43,[[]]],[11,"set_is_markup","","",43,[[]]],[11,"add_for_locale","","",43,[[["option",4]]]],[11,"get_default","","",43,[[],[["string",3],["option",4]]]],[11,"get_for_locale","","",43,[[],[["string",3],["option",4]]]],[11,"new","","",44,[[]]],[11,"with_default","","",44,[[["vec",3]]]],[11,"and_locale","","",44,[[["vec",3]]]],[11,"add_for_locale","","",44,[[["option",4]]]]],"p":[[3,"Collection"],[3,"Component"],[3,"ArtifactBuilder"],[3,"CollectionBuilder"],[3,"ComponentBuilder"],[3,"ImageBuilder"],[3,"LanguageBuilder"],[3,"ReleaseBuilder"],[3,"ScreenshotBuilder"],[3,"VideoBuilder"],[4,"ArtifactKind"],[4,"Bundle"],[13,"Flatpak"],[4,"Category"],[4,"Checksum"],[4,"ComponentKind"],[4,"ContentAttribute"],[4,"ContentRatingVersion"],[4,"ContentState"],[4,"Icon"],[13,"Cached"],[13,"Remote"],[13,"Local"],[4,"ImageKind"],[4,"Kudo"],[4,"Launchable"],[4,"ProjectUrl"],[4,"ReleaseKind"],[4,"Size"],[4,"ReleaseUrgency"],[4,"FirmwareKind"],[4,"Provide"],[13,"Firmware"],[4,"Translation"],[3,"AppId"],[3,"ContentRating"],[3,"Language"],[3,"License"],[3,"Artifact"],[3,"Release"],[3,"Image"],[3,"Screenshot"],[3,"Video"],[3,"TranslatableString"],[3,"TranslatableVec"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);