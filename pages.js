var pages = ["2x Rewards","Abyss","Achievements","Aqua Pants","Archangel Chestplate","Armageddon Boots","Auction","Beast","Beastmode","Blockhead","Bounty","Care Package","Castle","Chunk of Vile","Commands","Contracts","Dark Pants","Dragon Egg","Elements","Everyone Gets a Bounty","Factions","Four Seasons","Funky Feather","Genesis","Giant Cake","Gold","Golden Helmet","Hermit","Highlander","Item Shop","Killstreaks","King of the Hill","King of the Ladder","King's Quest","Level","Magnum Opus","Major Event","Mini Cake","Minor Event","Mystic Bow","Mystic Pants","Mystic Repair Kit","Mystic Sword","Mystic Well","NPCs","Overdrive","Perks","Philosopher's Cactus","Pit Supporter","Pizza","Prestige","Quests","Quick Maths","Raffle","Rage Pants","Rage Pit","Renown","Robbery","Sewer Pants","Sewers","Spire","Squads","Team Deathmatch","To the Moon","Totally Legit Gem","Uberstreak","XP",]

var searchpages = [[`   `,`javascript:void(0);`],[`"Not" Gladiator`,`Mystic_Pants#Not_Gladiator`],[`2x Rewards`,`2x_Rewards`],[`Abyss`,`Abyss`],[`Ace of Spades`,`Rage_Pants#Ace_of_Spades`],[`Achievements`,`Achievements`],[`Annoying Sewer Block`,`Castle#Annoying_Sewer_Block`],[`Apollo`,`Renown#Apollo`],[`Apostle to RNGesus`,`Killstreaks#Apostle_to_RNGesus`],[`Aqua Pants`,`Aqua_Pants`],[`Archangel Chestplate`,`Archangel_Chestplate`],[`Armageddon Boots`,`Armageddon_Boots`],[`Armory`,`Renown#Armory`],[`Arquebusier`,`Killstreaks#Arquebusier`],[`Arrow Armory`,`Mystic_Bow#Arrow_Armory`],[`Assassin`,`Mystic_Pants#Assassin`],[`Assistant to the Streaker`,`Perks#Assistant_to_the_Streaker`],[`Assured Strike`,`Killstreaks#Assured_Strike`],[`Auction`,`Auction`],[`Aura of Protection`,`Killstreaks#Aura_of_Protection`],[`Autobuy`,`Renown#Autobuy`],[`Bang Launch Trail`,`Renown#Bang_Launch_Trail`],[`Barbarian`,`Perks#Barbarian`],[`Beast`,`Beast`],[`Beastmode`,`Beastmode`],[`Beat the Spammers`,`Mystic_Sword#Beat_the_Spammers`],[`Berserker`,`Mystic_Sword#Berserker`],[`Billionaire`,`Mystic_Sword#Billionaire`],[`Billy`,`Mystic_Pants#Billy`],[`Blazing Launch Trail`,`Renown#Blazing_Launch_Trail`],[`Blockhead`,`Blockhead`],[`Bonk!`,`Perks#Bonk`],[`Boo-boo`,`Mystic_Pants#Booboo`],[`Bottomless Quiver`,`Mystic_Bow#Bottomless_Quiver`],[`Bounty`,`Bounty`],[`Bounty Cloak`,`Renown#Bounty_Cloak`],[`Bounty Hunter`,`Perks#Bounty_Hunter`],[`Bounty Reaper`,`Mystic_Sword#Bounty_Reaper`],[`Bounty Solvent`,`Item_Shop#Bounty_Solvent`],[`Bruiser`,`Mystic_Sword#Bruiser`],[`Bullet Time`,`Mystic_Sword#Bullet_Time`],[`Care Package`,`Care_Package`],[`Castle`,`Castle`],[`Celebrity`,`Renown#Celebrity`],[`Cherry`,`Castle#Cherry`],[`Chipping`,`Mystic_Bow#Chipping`],[`Chunk of Vile`,`Chunk_of_Vile`],[`Co-op Cat`,`Perks#Coop_Cat`],[`Combat Spade`,`Item_Shop#Combat_Spade`],[`Combo: Breaching Charge`,`Rage_Pants#Combo_Breaching_Charge`],[`Combo: Damage`,`Mystic_Sword#Combo_Damage`],[`Combo: Heal`,`Mystic_Sword#Combo_Heal`],[`Combo: Perun's Wrath`,`Mystic_Sword#Combo_Peruns_Wrath`],[`Combo: Stun`,`Mystic_Sword#Combo_Stun`],[`Combo: Swift`,`Mystic_Sword#Combo_Swift`],[`Combo: XP`,`Mystic_Sword#Combo_XP`],[`Commands`,`Commands`],[`Conglomerate`,`Perks#Conglomerate`],[`Contractor`,`Renown#Contractor`],[`Contracts`,`Contracts`],[`Cool Conclave`,`Renown#Cool_Conclave`],[`Corals`,`Abyss`],[`Counter-Janitor`,`Mystic_Sword#CounterJanitor`],[`Counter-Offensive`,`Mystic_Pants#CounterOffensive`],[`Counter-Strike`,`Killstreaks#CounterStrike`],[`Creative`,`Mystic_Pants#Creative`],[`Cricket`,`Mystic_Pants#Cricket`],[`Critically Funky`,`Mystic_Pants#Critically_Funky`],[`Critically Rich`,`Mystic_Bow#Critically_Rich`],[`Crush`,`Mystic_Sword#Crush`],[`Danger Close`,`Mystic_Pants#Danger_Close`],[`Dark Pants`,`Dark_Pants`],[`David and Goliath`,`Mystic_Pants#David_and_Goliath`],[`Deal with the Devil`,`Rage_Pants#Deal_with_the_Devil`],[`Devil Chicks!`,`Mystic_Bow#Devil_Chicks`],[`Diamond Allergy`,`Mystic_Pants#Diamond_Allergy`],[`Diamond Boots`,`Item_Shop#Diamond_Boots`],[`Diamond Chestplate`,`Item_Shop#Diamond_Chestplate`],[`Diamond Leggings`,`Item_Shop#Diamond_Leggings`],[`Diamond Stomp`,`Mystic_Sword#Diamond_Stomp`],[`Diamond Sword`,`Item_Shop#Diamond_Sword`],[`Dirty`,`Perks#Dirty`],[`Divine Intervention`,`Renown#Divine_Intervention`],[`Divine Miracle`,`Mystic_Pants#Divine_Miracle`],[`Do it like the French`,`Rage_Pants#Do_it_like_the_French`],[`Do Your Own Carpentry`,`Renown#Do_Your_Own_Carpentry`],[`Double-Jump`,`Mystic_Pants#Doublejump`],[`Dragon Egg`,`Dragon_Egg`],[`Duelist`,`Mystic_Sword#Duelist`],[`Eggs`,`Mystic_Pants#Eggs`],[`Electrolytes`,`Mystic_Pants#Electrolytes`],[`Elements`,`Elements`],[`Enchanting`,`Mystic_Well`],[`Escape Pod`,`Mystic_Pants#Escape_Pod`],[`Everyone Gets a Bounty`,`Everyone_Gets_a_Bounty`],[`Excess`,`Mystic_Pants#Excess`],[`Executioner`,`Mystic_Sword#Executioner`],[`Experience-industrial Complex`,`Renown#Experienceindustrial_Complex`],[`Explicious`,`Killstreaks#Explicious`],[`Explosive`,`Mystic_Bow#Explosive`],[`Extra Hearts`,`Renown#Extra_Hearts`],[`Extra Killstreak Slot`,`Renown#Extra_Killstreak_Slot`],[`Extra Perk Slot`,`Renown#Extra_Perk_Slot`],[`Factions`,`Factions`],[`Fancy Hat`,`Renown#Fancy_Hat`],[`Fancy Raider`,`Mystic_Sword#Fancy_Raider`],[`Fast Pass`,`Renown#Fast_Pass`],[`Faster than their shadow`,`Mystic_Bow#Faster_than_their_shadow`],[`Feast`,`Killstreaks#Feast`],[`Fight or Flight`,`Killstreaks#Fight_or_Flight`],[`First Shot`,`Mystic_Bow#First_Shot`],[`First Strike`,`Perks#First_Strike`],[`First-Aid Egg`,`Item_Shop#FirstAid_Egg`],[`Fishing Club`,`Renown#Fishing_Club`],[`Fishing Rod`,`Perks#Fishing_Rod`],[`Fletching`,`Mystic_Bow#Fletching`],[`Four Seasons`,`Four_Seasons`],[`Fractional Reserve`,`Mystic_Pants#Fractional_Reserve`],[`Fresh Pants`,`Mystic_Pants`],[`Funky Feather`,`Funky_Feather`],[`Gamble`,`Mystic_Sword#Gamble`],[`Genesis`,`Genesis`],[`Giant Cake`,`Giant_Cake`],[`Gladiator`,`Perks#Gladiator`],[`Glass Pickaxe`,`Killstreaks#Glass_Pickaxe`],[`Gold`,`Gold`],[`Gold and Boosted`,`Mystic_Sword#Gold_and_Boosted`],[`Gold Boost`,`Mystic_Bow#Gold_Boost`],[`Gold Bump`,`Mystic_Bow#Gold_Bump`],[`Gold Nano-factory`,`Killstreaks#Gold_Nanofactory`],[`Gold Stack`,`Killstreaks#Gold_Stack`],[`Golden Heads`,`Perks#Golden_Heads`],[`Golden Hearts`,`Mystic_Pants#Golden_Hearts`],[`Golden Helmet`,`Golden_Helmet`],[`Golden Pickaxe`,`Item_Shop#Golden_Pickaxe`],[`Gomraw's Heart`,`Mystic_Pants#Gomraws_Heart`],[`Gotta go fast`,`Mystic_Pants#Gotta_go_fast`],[`Grasshopper`,`Mystic_Sword#Grasshopper`],[`Guts`,`Mystic_Sword#Guts`],[`Healer`,`Mystic_Sword#Healer`],[`Hearts`,`Mystic_Pants#Hearts`],[`Heigh-Ho`,`Rage_Pants#HeighHo`],[`Hemorrhage`,`Mystic_Sword#Hemorrhage`],[`Heresy`,`Renown#Heresy`],[`Hermit`,`Hermit`],[`Hero's Haste`,`Killstreaks#Heros_Haste`],[`Hidden Jewel`,`Mystic_Sword#Hidden_Jewel`],[`High-Grade Egg`,`Castle#HighGrade_Egg`],[`Highlander`,`Highlander`],[`Hunt the Hunter`,`Mystic_Pants#Hunt_the_Hunter`],[`Ice Cube`,`Killstreaks#Ice_Cube`],[`Impatient`,`Renown#Impatient`],[`Instaboom`,`Mystic_Pants#Instaboom`],[`Inventory Management`,`Renown#Inventory_Management`],[`Iron Axe`,`Perks#Barbarian`],[`Iron Pack`,`Item_Shop#Iron_Pack`],[`Item Shop`,`Item_Shop`],[`Jump Boost IV`,`Item_Shop#Jump_Boost_IV`],[`Jumpspammer`,`Mystic_Bow#Jumpspammer`],[`Khanate`,`Killstreaks#Khanate`],[`Killstreaks`,`Killstreaks`],[`King Buster`,`Mystic_Sword#King_Buster`],[`King of the Hill`,`King_of_the_Hill`],[`King of the Ladder`,`King_of_the_Ladder`],[`King's Quest`,`Kings_Quest`],[`Knockback`,`Mystic_Sword#Knockback`],[`KOTH`,`King_of_the_Hill`],[`KOTL`,`King_of_the_Ladder`],[`Kung Fu Knowledge`,`Perks#Kung_Fu_Knowledge`],[`Last Stand`,`Mystic_Pants#Last_Stand`],[`Lava Bucket`,`Perks#Lava_Bucket`],[`Leech`,`Killstreaks#Leech`],[`Level`,`Level`],[`Lifesteal`,`Mystic_Sword#Lifesteal`],[`Lodbrok`,`Mystic_Pants#Lodbrok`],[`Lucky Diamond`,`Perks#Lucky_Diamond`],[`Lucky Shot`,`Mystic_Bow#Lucky_Shot`],[`Magnum Opus`,`Magnum_Opus`],[`Major Event`,`Major_Event`],[`Marathon`,`Perks#Marathon`],[`Martyrdom`,`Mystic_Pants#Martyrdom`],[`Marvelous Chicken`,`Castle#Marvelous_Chicken`],[`McSwimmer`,`Mystic_Pants#McSwimmer`],[`Mega Longbow`,`Mystic_Bow#Mega_Longbow`],[`Milk Bucket`,`Castle#Milk_Bucket`],[`Mineman`,`Perks#Mineman`],[`Mini Cake`,`Mini_Cake`],[`Minor Event`,`Minor_Event`],[`Mirror`,`Mystic_Pants#Mirror`],[`Mixed Combat`,`Mystic_Bow#Mixed_Combat`],[`Moctezuma`,`Mystic_Bow#Moctezuma`],[`Monster`,`Killstreaks#Monster`],[`Mystic Bow`,`Mystic_Bow`],[`Mystic Pants`,`Mystic_Pants`],[`Mystic Repair Kit`,`Mystic_Repair_Kit`],[`Mystic Sword`,`Mystic_Sword`],[`Mystic Well`,`Mystic_Well`],[`Mysticism`,`Renown#Mysticism`],[`Negotiator`,`Mystic_Pants#Negotiator`],[`New Deal`,`Rage_Pants#New_Deal`],[`NPCs`,`NPCs`],[`Obsidian`,`Item_Shop#Obsidian`],[`Obsidian Stack`,`Item_Shop#Obsidian_Stack`],[`Olympus`,`Perks#Olympus`],[`One Upper`,`Renown#One_Upper`],[`Original`,`Elements`],[`Overdrive`,`Overdrive`],[`Overheal`,`Perks#Overheal`],[`Packaged Bale`,`Castle#Packaged_Bale`],[`Pain Focus`,`Mystic_Sword#Pain_Focus`],[`Pants Bundle`,`Item_Shop#Pants_Bundle`],[`Pants Radar`,`Mystic_Bow#Pants_Radar`],[`Paparazzi`,`Mystic_Pants#Paparazzi`],[`Parasite`,`Mystic_Bow#Parasite`],[`Pebble`,`Mystic_Pants#Pebble`],[`Perks`,`Perks`],[`Peroxide`,`Mystic_Pants#Peroxide`],[`Philosopher's Cactus`,`Philosophers_Cactus`],[`Phoenix`,`Mystic_Pants#Phoenix`],[`Pin down`,`Mystic_Bow#Pin_down`],[`Pit Blob`,`Mystic_Pants#Pit_Blob`],[`Pit MBA`,`Mystic_Pants#Pit_MBA`],[`Pit Supporter`,`Pit_Supporter`],[`Pitpocket`,`Mystic_Sword#Pitpocket`],[`Pizza`,`Pizza`],[`Prestige`,`Prestige`],[`Prick`,`Mystic_Pants#Prick`],[`Promotion!!`,`Renown#Promotion`],[`Protection`,`Mystic_Pants#Protection`],[`Pullbow`,`Mystic_Bow#Pullbow`],[`Pungent`,`Killstreaks#Pungent`],[`Punisher`,`Mystic_Sword#Punisher`],[`Pure Rage`,`Renown#Pure_Rage`],[`Purple Gold`,`Mystic_Pants#Purple_Gold`],[`Push comes to shove`,`Mystic_Bow#Push_comes_to_shove`],[`Quests`,`Quests`],[`Quick Maths`,`Quick_Maths`],[`R&R`,`Killstreaks#RR`],[`Radioactive Boots`,`Castle#Radioactive_Boots`],[`Raffle`,`Raffle`],[`Rage Pants`,`Rage_Pants`],[`Rage Pit`,`Rage_Pit`],[`Rambo`,`Perks#Rambo`],[`Raw Chicken`,`Castle#Raw_Chicken`],[`Raw numbers`,`Renown#Raw_numbers`],[`Really Toxic`,`Rage_Pants#Really_Toxic`],[`Recon`,`Perks#Recon`],[`Regularity`,`Rage_Pants#Regularity`],[`Renown`,`Renown`],[`Renown Gold Boost`,`Renown#Renown_Gold_Boost`],[`Renown XP Bump`,`Renown#Renown_XP_Bump`],[`Respawn: Absorption`,`Mystic_Pants#Respawn_Resistance`],[`Respawn: Resistance`,`Mystic_Pants#Respawn_Absorption`],[`Revengeance`,`Mystic_Sword#Revengeance`],[`Revitalize`,`Mystic_Pants#Revitalize`],[`Ring Armor`,`Mystic_Pants#Ring_Armor`],[`Robbery`,`Robbery`],[`Robinhood`,`Mystic_Bow#Robinhood`],[`Rush`,`Killstreaks#Rush`],[`Safety First`,`Perks#Safety_First`],[`Scam Artist`,`Renown#Scam_Artist`],[`Second Gapple`,`Killstreaks#Second_Gapple`],[`Self-checkout`,`Mystic_Pants#Selfcheckout`],[`Self-Confidence`,`Renown#SelfConfidence`],[`Sewer Block`,`Castle#Sewer_Block`],[`Sewer Pants`,`Sewer_Pants`],[`Sewer Rubbish`,`Castle#Sewer_Rubbish`],[`Sewers`,`Sewers`],[`Shark`,`Mystic_Sword#Shark`],[`Sharp`,`Mystic_Sword#Sharp`],[`Sierra`,`Mystic_Sword#Sierra`],[`Singularity`,`Mystic_Pants#Singularity`],[`Sniper`,`Mystic_Bow#Sniper`],[`Snowballs`,`Mystic_Pants#Snowballs`],[`Snowmen Army`,`Mystic_Pants#Snowmen_Army`],[`Solitude`,`Mystic_Pants#Solitude`],[`Soup`,`Perks#Soup`],[`Spammer`,`Perks#Spammer`],[`Spammer and Proud`,`Mystic_Bow#Spammer_and_Proud`],[`Speedy Hit`,`Mystic_Sword#Speedy_Hit`],[`Speedy Kill`,`Mystic_Sword#Speedy_Kill`],[`Spire`,`Spire`],[`Spongesteve`,`Killstreaks#Spongesteve`],[`Sprint Drain`,`Mystic_Bow#Sprint_Drain`],[`Squads`,`Squads`],[`Steaks`,`Mystic_Pants#Steaks`],[`Streaker`,`Perks#Streaker`],[`Strength-Chaining`,`Perks#StrengthChaining`],[`Strike Gold`,`Mystic_Bow#Strike_Gold`],[`Sugar Extract`,`Castle#Sugar_Extract`],[`Super Streaker`,`Killstreaks#Super_Streaker`],[`Superb Launch Trail`,`Renown#Superb_Launch_Trail`],[`Sweaty`,`Mystic_Bow#Sweaty`],[`Sybil`,`Rage_Pants#Sybil`],[`Tactical Insertion`,`Item_Shop#Tactical_Insertion`],[`Tactical Retreat`,`Killstreaks#Tactical_Retreat`],[`Team Deathmatch`,`Team_Deathmatch`],[`Telebow`,`Mystic_Bow#Telebow`],[`Tenacity`,`Renown#Tenacity`],[`The Punch`,`Mystic_Sword#The_Punch`],[`The Way`,`Renown#The_Way`],[`Thick`,`Perks#Thick`],[`Think of the People`,`Rage_Pants#Think_of_the_People`],[`TNT`,`Mystic_Pants#TNT`],[`To the Moon`,`To_the_Moon`],[`Totally Legit Gem`,`Totally_Legit_Gem`],[`Tough Skin`,`Killstreaks#Tough_Skin`],[`Trickle-down`,`Perks#Trickledown`],[`True Shot`,`Mystic_Bow#True_Shot`],[`Uberstreak`,`Uberstreak`],[`Vampire`,`Perks#Vampire`],[`Very Yummy!`,`Renown#Very_Yummy`],[`Volley`,`Mystic_Bow#Volley`],[`Wasp`,`Mystic_Bow#Wasp`],[`What doesn't kill you`,`Mystic_Bow#What_doesnt_kill_you`],[`Wheat`,`Castle#Wheat`],[`Wolf Pack`,`Mystic_Pants#Wolf_Pack`],[`XP`,`XP`],[`XP Boost`,`Mystic_Bow#XP_Boost`],[`XP Bump`,`Mystic_Bow#XP_Bump`],[`XP Stack`,`Killstreaks#XP_Stack`],[`Yummy Bread`,`Castle#Yummy_Bread`],[`Yummy!`,`Renown#Yummy`],[`/cool (command)`,`Commands#cool`],[`/lobby (command)`,`Commands#lobby`],[`/offer (command)`,`Commands#offer`],[`/oof (command)`,`Commands#oof`],[`/pitchat (command)`,`Commands#pitchat`],[`/play pit (command)`,`Commands#play_pit`],[`/spawn (command)`,`Commands#spawn`],[`/trade (command)`,`Commands#trade`],[`/view (command)`,`Commands#view`],]