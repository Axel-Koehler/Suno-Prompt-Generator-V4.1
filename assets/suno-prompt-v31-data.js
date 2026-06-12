// Parsed from SunoDatenbank.xlsx - categories with their sub-labels and options
export const SUNO_CATEGORIES = [
  {
    id: "genre",
    title: "Grundstil & Mischung",
    subLabel: "Haupt-Genre",
    options: ["pop","hip-hop","rock","electronic/dance","r&b","indie/alternative","metal","soul/funk","jazz","classical","latin","country","folk/acoustic","reggae/dancehall","blues","k-pop","afro/afrobeats","punk","ambient/chillout","cinematic","german schlager/folk-pop","gospel/christian","world/global","experimental","children's music"]
  },
  {
    id: "subgenre",
    title: "Subgenre",
    subLabel: "Subgenre (präzise)",
    options: ["pop","rock","hip-hop","electronic/dance","r&b","jazz","metal","classical orchestral","soul","folk/acoustic","country","reggae","latin","blues","punk","indie pop","alternative rock","trap","house","techno","synthwave/retrowave","lo-fi hip hop","k-pop","afrobeats","drum and bass","dubstep","grunge","disco","funk","gospel","ambient","cinematic score","german schlager/folk-pop","80s pop","90s boom bap","neo-soul","shoegaze","dream pop","bedroom pop","hyperpop/glitchcore","future bass","phonk","vaporwave","city pop","math rock","post-punk","new wave","psychedelic rock","stoner rock","surf rock","reggaeton","amapiano","bossa nova","jazz fusion","electro swing","IDM","UK garage/2-step","hardstyle","trance","deep house","tropical house","industrial","emo/midwest emo","pop punk","nu-metal","djent/prog metal","blackgaze","symphonic metal","baroque pop","chamber pop","art pop","Anatolian rock","Bollywood/Bhangra","psychedelic cumbia","desert blues","Nordic folk","Celtic folk","spaghetti western","dungeon synth","witch house","dark wave","cyberpunk industrial","epic trailer music","video game chiptune","Motown/Northern soul","bluegrass","Americana","ska","dub","dancehall","salsa","tango","Gregorian chant","medieval tavern","dark academia classical","space country","future funk","kawaii metal","experimental/avant-garde"]
  },
  {
    id: "mood",
    title: "Emotion & Einsatz",
    subLabel: "Stimmung",
    subcategories: [
      {
        id: "mood_stimmung",
        label: "Stimmung",
        options: ["the overall mood is uplifting and curious","the overall mood is bittersweet yet hopeful","the overall mood is dark-playful","the overall mood is elegant night-city","the overall mood is cozy festive warmth","the overall mood is mystical and enigmatic","the overall mood is heroic and triumphant","the overall mood is melancholic and reflective","the overall mood is romantic and warm","the overall mood is tranquil and meditative","the overall mood is intense and cathartic","the overall mood is psychedelic and surreal","the overall mood is gritty urban noir","the overall mood is ethereal and cosmic","the overall mood is ominous and dystopian","the overall mood is whimsical and magical","the overall mood is stoic and epic","the overall mood is futuristic and sleek","the overall mood is organic and earthy","the overall mood is nostalgic and luxurious","the overall mood is spiritual and reverent","the overall mood is tense and suspenseful","the overall mood is playful and cheeky"]
      },
      {
        id: "mood_energie",
        label: "Energie & Tanzbarkeit",
        options: ["head-nod lounge energy","mid-tempo bounce energy","laid-back swing energy","syncopated funk push energy","broken-beat drive energy","halftime swagger energy","four-on-the-floor drive energy","two-step shuffle energy","smooth house glide energy","disco strut energy","amapiano log-drum sway energy","afrobeats groove energy","reggae skank energy","cumbia shuffle energy","trap lean energy","drum-and-bass sprint energy","hardstyle adrenaline energy","hypnotic trance flow energy","mosh-pit frenzy energy","steady cinematic march energy","glitch-step jolt energy","interlaced polyrhythms energy","UK-garage skip energy"]
      },
      {
        id: "mood_cinematic",
        label: "Cinematic-Tag",
        options: ["an overall cinematic feeling in the style of family-friendly wonder","an overall cinematic feeling that is whimsical yet classy","an overall cinematic feeling in the style of an animated finale lift","an overall cinematic feeling in the style of a cyberpunk neon chase","an overall cinematic feeling in the style of a spaghetti western showdown","an overall cinematic feeling in the style of a dungeon crawl ambience","an overall cinematic feeling in the style of an epic trailer rise","an overall cinematic feeling in the style of noir city rain","an overall cinematic feeling in the style of a dark academia chamber","an overall cinematic feeling in the style of a space opera vista","an overall cinematic feeling in the style of a retro arcade montage","an overall cinematic feeling in the style of a rom-com glow","an overall cinematic feeling in the style of a sports victory montage","an overall cinematic feeling in the style of a horror tension pulse","an overall cinematic feeling in the style of a mystical forest quest","an overall cinematic feeling in the style of a medieval tavern revelry","an overall cinematic feeling in the style of a nature timelapse sweep","an overall cinematic feeling in the style of an ocean documentary panorama","an overall cinematic feeling in the style of post-apocalyptic survival","an overall cinematic feeling in the style of a steampunk parade","an overall cinematic feeling in the style of a fairytale ballet","an overall cinematic feeling in the style of a sci-fi exploration","an overall cinematic feeling in the style of a Bollywood celebration","an overall cinematic feeling in the style of a Viking saga"]
      }
    ]
  },
  {
    id: "mode",
    title: "Stücktyp & Besetzung",
    subLabel: "Modus",
    subcategories: [
      {
        id: "mode_modus",
        label: "Modus",
        options: ["instrumental only","male lead vocal","female lead vocal","male+female duet","a cappella choir","vocal lead with choir pads","rap lead vocal","spoken-word narration lead","vocoder/robotic lead","male falsetto lead","baritone crooner lead","female power belting lead","whispered intimate vocal lead","screamed/harsh vocal lead","call-and-response vocals","group shout gang vocals","scat jazz vocal lead","operatic vocal lead","children's choir lead","overtone/throat singing lead","wordless ethnic vocalises","whistling/humming lead","instrumental lead electric guitar","instrumental lead saxophone","instrumental lead violin","instrumental lead piano","instrumental lead synth","world string lead (sitar/oud/baglama)"]
      },
      {
        id: "mode_produktion",
        label: "Live / Studio",
        options: ["live-band focus","hybrid live+programmed","fully programmed","live-to-tape one-take session","studio overdub layering workflow","sampler/MPC performance set","solo loop-based performer","DJ/producer with live vocal","unplugged acoustic set","street busking setup (cajon+guitar)","modular synth rig performance"]
      },
      {
        id: "mode_besetzung",
        label: "Dichte & Textur",
        options: ["ultra-minimal mono line + drone","sparse minimalist arrangement","intimate duo with space","tight trio pocket","negative space stop-go phrasing","pointillistic pluck textures","airy ambient texture","subtle pad undercurrent","mid-density groove bed","interlocking rhythmic mosaic","contrapuntal lines weaving","ostinato engine with motifs","layered harmonies (3–5 parts)","stacked choir pads","lush string/pad beds","wide stereo soundstage","saturated tape haze","noisy lo-fi bed","glitch-swarm microedits","sidechain-breathing textures","aggressively compressed density","dense wall-of-sound layering","cinematic crescendos and swells","percussive barrage texture","chaotic maximalist textures","drop-heavy contrasts (sparse verse/huge chorus)","breakdown-driven dynamics","evolving build from thin to thick","reverb-wash dreamscape"]
      }
    ]
  },
  {
    id: "tempo",
    title: "Tempo & Groove",
    subLabel: "Tempo (BPM) / Groove",
    subcategories: [
      {
        id: "tempo_bpm",
        label: "Tempo (BPM)",
        options: ["BPM min:60,max:180,default:92"]
      },
      {
        id: "tempo_groove",
        label: "Groove-Feeling",
        options: ["four-on-the-floor drive","head-nod halftime pocket","mid-groove","laid-back pocket with behind-the-beat feel","boom-bap swing groove","broken-beat syncopation","12/8 shuffle feel","triplet feel over 4/4","2-step shuffle","amapiano log-drum shuffle","funky 16th-note ghost-note groove","samba batucada drive","motorik steady 4/4","bossa nova sway","reggaeton dembow pattern","afrobeats lilt with offbeat accents","offbeat skank upstrokes","djenty staccato syncopation","drill half-time bounce","drum-and-bass roller feel","hardstyle reverse-bass pump","syncopated funk push","slow, dreamy vaporwave drag","angular syncopated accents"]
      },
      {
        id: "tempo_taktart",
        label: "Taktart/Metrik",
        options: ["4/4 (Standard)","2/4 (Tanz/Latin)","3/4 (Walzer)","6/8 (Ballade/Irish)","12/8 (Shuffle/Slow Blues)","5/4 (Prog/Jazz)","5/8 (Additiv)","7/8 (2+2+3)","7/4 (Weit atmend)","9/8 (2+2+2+3)","9/8 (3+3+3)","10/8 (3+3+2+2)","11/8 (3+2+3+3)","11/8 (2+3+2+2+2)","13/8 (3+3+2+2+3)","15/16 (Balkan/aksak)","alternating 5/4 and 4/4","alternating 7/8 and 4/4","alternating 6/8 and 3/4","compound 4/4 with 12/8 hemiolas","3:2 polyrhythm over 4/4","4:3 polyrhythm over 4/4","free-time rubato","mixed meters"]
      },
    ]
  },
  {
    id: "drums",
    title: "Drums & Beat-Design",
    subLabel: "Kit-Charakter",
    subcategories: [
      {
        id: "drums_kit",
        label: "Kit-Charakter",
        options: ["dusty breakbeat kit","tight funk kit with rimshot snare","jazz brushes kit","dry studio kit","80s analog drum machine punch (LinnDrum vibe)","TR-909 techno kit, saturated","TR-808 trap kit with deep subs and crisp claps","industrial metallic kit with gated rooms","lo-fi cassette-recorded kit with tape hiss","roomy shoegaze kit with washy crashes","tight tom-forward math-rock kit","prog-metal djent kit with clicky kick and tight shells","blackgaze kit tuned for blastbeats","surf rock kit with springy, reverbed snare","hybrid acoustic+electronic future-bass kit","cavernous trap kit with long reverb tails","phonk kit with distorted 808 kick and cowbell","IDM glitch kit built from micro-samples","slow 80s kit with big gated reverb","snappy UK garage/2-step kit","woody rim-forward afrobeat/highlife kit","light bossa/samba jazz kit (rods/brushes)","soft deep-house kit for amapiano grooves","hardstyle hard distorted kick engine","tight airy DnB break kit","post-punk kit with deadened snare and kick","desert rock kit with big wooly toms"]
      },
      {
        id: "drums_programmierung",
        label: "Programmierung/Feel",
        options: ["driving four-on-the-floor house pattern","halftime trap bounce with snare on 3","shuffling 2-step garage groove","boom bap swing quantize ~57%","chopped amen break edits","rolling drum and bass two-step at high tempo","breakcore chaotic micro-slices and fills","IDM polymetric layering (5:4, 7:8)","odd-meter funk phrasing in 7/8","relentless krautrock motorik 8ths","classic dembow/reggaeton engine","amapiano sparse kick pattern with lounge swing","afrobeat broken hi-hat ostinatos and call/response","partido-alto bossa/samba syncopation","dense ghost-note funk drumming","drunk-swing neo-soul pocket behind the beat","verse straight → chorus halftime drop switch","driving straight 16th pulse (synthwave)","triplet gallop hardstyle cadence","slow, heavy, reverb-laden trap bounce","trap-metal patterns with double-kick bursts","sustained blastbeats and tremolo drive","hybrid cinematic trailer pulses","gradual post-rock crescendos with cymbal swells","surf-rock gallop with tom/snare interplay","slow lurching stoner backbeat","city-pop disco shuffle with upbeat push","rigid mechanical post-punk drive","phonk cowbell stomp","slow, dreamy vaporwave drag"]
      },
      {
        id: "drums_hats",
        label: "Hats/Becken",
        options: ["dry closed hi-hats","soft ride patterns","offbeat tambourine","ticking hats with occasional rolls","open hat off-beats (house style)","shuffling swung 16th hi-hats (UKG)","crisp trap triplet hi-hats","lo-fi tape-hiss hat texture","gated white-noise EDM hats","granular glitch hat bursts","sizzle ride with rivets","dark washy ride cymbal","ride bell ostinato patterns","china cymbal accents and splashes","stacked trash cymbal hits","reversed cymbal swells","12/8 shuffle ride phrasing","jazz brush swirls on ride","quick splash cymbal flourishes","cowbell disco/boogie pattern","phonk-style cowbell punctuation","sleigh bells shimmer for lifts","hi-hat foot chicks on quarters","open/close hi-hat bark accents","hand-muted hi-hat chokes","ride-to-crash wash transitions"]
      }
    ]
  },
  {
    id: "percussion",
    title: "Percussion-Layer",
    subLabel: "World-Percussion",
    subcategories: [
      {
        id: "percussion_world",
        label: "World-Percussion",
        options: ["darbuka","bendir","djembe","congas","bongos","cajon","udu clay pot","tabla","dhol drum","mridangam","kanjira frame drum","taiko ensemble","bodhran","frame drum","shekere","agogo bells","pandeiro","claves","maracas","guiro","timbales","cuica","amapiano log-drum accents","gankogui bell","kalangu talking drum","daf frame drum","ashiko drum"]
      },
      {
        id: "percussion_color",
        label: "Color-Hits",
        options: ["tight finger snaps","crowd handclaps","soft rim clicks","stick shot accents","woodblocks","temple blocks","triangle","sleigh-bell shimmer","808 cowbell hits","agogo bell accents","sharp clave hits","castanets","tambourine offbeats","fine seed shaker","cabasa rolls","guiro scrapes","vibraslap","mark tree chimes","glockenspiel accents","anvil metal hits","bottle glass hits","whip crack","referee whistle stabs","clapper sticks","spoon percussion taps","octave tom fills","bell tree gliss","jaw harp clicks"]
      },
      {
        id: "percussion_fx",
        label: "FX-Percussion",
        options: ["reverse cymbal swells","white-noise risers","downlifter air-suck","808 sub drops","impact booms","whoosh impacts","tape/vinyl stops","record scratch fills","glitch stutters","granular bursts","bitcrushed drum fills","gated reverb snare bombs","laser zap hits","robotic blips and beeps","industrial metal clangs","chain drag scrapes","door slam thumps","clock tick loops","typewriter rhythm clicks","pitch-bend uplifters","reverse tom flams","thunder clap with cymbal","cinematic braam hit","air horn stabs","noise riser with snare roll","sidechained pump effects","granular reversed vocal percs"]
      }
    ]
  },
  {
    id: "bass",
    title: "Bass/Low-End",
    subLabel: "Bass-Typ",
    subcategories: [
      {
        id: "bass_typ",
        label: "Bass-Typ",
        options: ["electric bass fingerstyle","electric bass with pick","fretless electric bass","five-string modern bass","short-scale vintage bass","slap electric bass","upright double bass pizzicato","upright double bass bowed sustains","latin baby-bass tone","baritone guitar as bass","tic-tac palm-muted bass","tuba / sousaphone bass","pipe-organ pedal bass","sine-wave subsynth","monophonic analog synth bass","wavetable synth bass","FM metallic synth bass","808 glide sub-bass","acid squelch bassline","neuro bass with heavy modulation","amapiano log-drum bass","house/disco octave synth bass","detuned reese bass","UK donk bass","sampled/looped vinyl bass","trance offbeat bass"]
      },
      {
        id: "bass_spielweise",
        label: "Spielweise",
        options: ["two-feel jazz pattern","disco octave eighth-notes","four-on-the-floor pumping octaves","syncopated funk with ghost notes","slap fills and pops","latin tumbao pattern","dub/reggae one-drop bass","UK garage skippy bass riffs","long sustained reese with filter sweeps","trap 808 long notes with portamento","hardstyle reverse-bass pattern","offbeat pumping quarter-notes","amapiano log-drum rolls and drops","repetitive afrobeat vamps","post-punk monotone eighths","pedal-root against wall-of-sound","surf tic-tac palm-muted eighths","slow unison riffing with guitars","odd-meter ostinatos (5/4, 7/8)","polyrhythmic 3:2 counterlines","arpeggiated synth-bass pattern","melodic counterlines / call-and-response","sidechained pumping pulses","stop-start edits and gaps","expressive slides and glissandi","sustained pedal drones","broken-beat syncopation accents","shuffle/swing feel"]
      },
      {
        id: "bass_klang",
        label: "Klang",
        options: ["warm round low-end","sub-heavy earthshaking lows","tight punchy attack","glossy mid-scooped tone","gritty midrange growl","bright clanky pick bite","muted foam thump","flatwound vintage mellow","roundwound bright modern","singing fretless mwah","ultra-clean DI","amp-voiced cabinet air","DI and amp blend","tape-saturated low end","tube-like overdrive","fuzzy distorted wall","bitcrushed lo-fi bass","harmonic-rich 808 overtones","envelope/auto-wah quack","wide phaser/chorus modulation","formant vowel filtering","LFO wobble filter motion","resonant acid squelch","detuned reese chorus","mono-centered focused bass","stereo-widened synth bass","roomy miked ambience","vinyl-sampled dusty tone","cassette warble coloration","subharmonic generator weight"]
      }
    ]
  },
  {
    id: "guitar",
    title: "Gitarren & Clav",
    subLabel: "Rolle",
    subcategories: [
      {
        id: "guitar_rolle",
        label: "Rolle",
        options: ["clavinet wah stabs","clean comp guitar","palm-mute funk guitar","tremolo swells","jangle 12-string rhythm","surf tremolo picking","reggae/dub skank upstrokes","bossa nova nylon comping","jazz chord-melody","gypsy-jazz la pompe rhythm","country chicken pickin","delta/slide blues bottleneck","tuareg desert groove guitar","anatolian psych riffs","city pop clean rhythm","highlife interlocking guitars","post-punk jangle rhythm","shoegaze texture wash","dream-pop ambient guitar pads","math-rock tapping patterns","midwest emo twinkle lines","djent staccato chugs","stoner/desert rock riffing","blackgaze tremolo waves","lounge/exotica chord voicings","neo-soul silky comping","trip-hop sparse lines","idm/glitch processed textures","flamenco rasgueado accents"]
      },
      {
        id: "guitar_hook",
        label: "Hook/Lines",
        options: ["dotted-eighth delay hooks","chordal riff hooks","octave double hooks","slide ornament lines","tapped harmonics","natural harmonic chimes","ebow sustained melodies","tremolo-picked leads","call-and-response phrases","ostinato arpeggios","syncopated mute scratches","pentatonic desert licks","hijaz/maqam-flavored licks","twangy descending runs","chorused arpeggios","polymeter 3:2 riff","12-string jangle hooks","thirds/sixths countermelodies","feedback swells","reverse swells","double-stop bends","pinch-harmonic squeals","octave whammy jumps","rasgueado bursts","melodic counterlines / call-and-response","expressive slides and glissandi","funk raking stabs","reggae skank hits","sustained pedal drones","broken-beat syncopation accents","highlife interlocking motif"]
      },
      {
        id: "guitar_pedalboard",
        label: "Pedalboard & Amp-Sound",
        options: ["ambient shimmer reverb clouds","thick fuzz distortion","chorus/flanger modulation","vintage crunchy tube overdrive","spring reverb surf drip","bias tremolo amp","uni-vibe style throb","12-stage phaser sweep","analog tape echo","digital dotted-eighth delay","slapback delay rockabilly","ping-pong stereo delay","lush plate reverb","bucket-brigade analog delay","reverse reverb swell","envelope filter auto-wah","classic wah pedal","sub octave/octaver","pitch shifter whammy","ring modulation metallic","bitcrusher sample-rate reduce","granular freeze glitch","hard noise gate tight","compressor nashville squash","sustainer infinite feedback"]
      }
    ]
  },
  {
    id: "keys",
    title: "Tasten & Synth",
    subLabel: "Keys",
    subcategories: [
      {
        id: "keys_keys",
        label: "Keys",
        options: ["concert grand piano","felt muted piano","woody upright piano","honky-tonk tack piano","prepared piano inside hits","CP-70 electric grand","Fender Rhodes with warm tremolo","DX7 FM electric piano","glassy FM EP","Wurlitzer reed-bite EP","M1 house piano","clavinet funk comp","Hammond B3 with Leslie","Vox Continental combo organ","Farfisa bright combo organ","cathedral pipe organ","harmonium reed organ","accordion musette","harpsichord baroque","analog Juno-style chorus pad"]
      },
      {
        id: "keys_synth",
        label: "Synth/Arps",
        options: ["glossy polysynths","wavetable motion pad","granular shimmer pad","PWM synth strings","retrowave neon saw leads","gated trance plucks","future-bass chord stacks","8-bit chiptune arpeggios","Mellotron flutes","Mellotron strings","Mellotron choir","string machine ensemble (Solina style)","detuned vaporwave VHS pad","lo-fi cassette-warped pad","euclidean polymetric arpeggiator","random-step generative arp","monosynth lead with portamento","FM bell arpeggiator","acid 303 sequencer line","modular blips and bleeps","sidechained gated pad","supersaw stack lead","hardstyle screech lead","2-step wobble keys","UK garage M1 organ stabs","cyberpunk pulsing bass arp","synth choir pad","synth string-machine ensemble"]
      },
      {
        id: "keys_mallet",
        label: "Mallet/Toy",
        options: ["lo-fi toy piano","vibraphone with motor tremolo","warm marimba rolls","bright xylophone","glockenspiel/celesta sparkle","tubular bells chimes","glass-like crotales","steel pan melodies","handpan hang drum","kalimba thumb piano","music-box tines","gamelan metallophone ensemble","angklung bamboo shakes","santur hammered dulcimer","cimbalom hammered zither","prepared-piano plucks","harp glissandi and harmonics","bowed waterphone eerie tones","glass harmonica crystal bowls","bell tree shimmer","wind chimes","wooden slit drum","orchestral bells campanelli","reverse mallet swells","celesta staccato"]
      }
    ]
  },
  {
    id: "earcandy",
    title: "Ear-Candy & Kontrast",
    subLabel: "Pop-Out-Elemente",
    subcategories: [
      {
        id: "earcandy_popout",
        label: "Pop-Out-Elemente",
        options: ["reverse swells","stutter edits","tape/vinyl stops","granular shimmer","glitch fills","vocal chops","formant-shifted ad-libs","deep pitch fallers","bright pitch risers","laser zap one-shots","cinematic impact booms","sub-bass drops","clock tick accents","spot handclaps and snaps","tremolo chopper accents","hard sidechain pump moment","fm bell hits","cowbell ear-candy tag","whistled hook line","turntable scratch hits","radio chatter vox fx","vocoder hook stabs","pitched percussion ear-candy","reverse-pitch riser","vinyl crackle texture"]
      },
      {
        id: "earcandy_raum",
        label: "Raum/Delay",
        options: ["dry intimate front","tight booth short ambience","short room on drums","small club room vibe","slapback room 80–120ms","spring reverb on guitars","plate reverb on vocals/keys","bright plate on snare","dark plate for horns","gold foil plate vintage","chamber reverb subtle depth","airy hall on strings","lush concert hall tails","cathedral long tail","shimmer reverb airy highs","non-linear gated reverb","reverse reverb swells","dub space sends","tape echo repeats","ping-pong delay stereo","dotted-eighth delay on hooks","granular cloud reverb","convolution vintage room IR","re-amped room ambience"]
      },
      {
        id: "earcandy_stille",
        label: "Stille/Breaks",
        options: ["full bar silence drop","half-bar rest pocket","two-beat dropout","four-bar breakdown empty","stripped-down verse (kick only)","pre-chorus tension hold","stop-time break with stab","one-shot impact then silence","breath pause before drop","sparse breakdown (bass+kick)","false ending silence","fade-out tease then return","acapella break (vocal only)","sudden mute with reverb tail","slow fade to silence","gradual strip back","a cappella bar break","drop to single element","white-noise cut to silence","reversed build into silence","ambient-only interlude","drone sustain with no rhythm","snare-roll to full stop","glitched silence stutter","long deceleration to pause"]
      }
    ]
  },
  {
    id: "harmony",
    title: "Harmonie & Tonalität",
    subLabel: "Tonart/Stimmung",
    subcategories: [
      {
        id: "harmony_tonart",
        label: "Tonart/Stimmung",
        options: ["major (bright)","minor/aeolian","dorian (cool)","mixolydian groove","lydian floating","phrygian dark","phrygian dominant / Hijaz color","harmonic minor dramatic","melodic minor modern","major pentatonic","minor pentatonic","blues scale feel","whole-tone color","octatonic (diminished) scale","maqam/raga-inspired color","drone-centered tonality","modal center, non-functional","ambiguous key center","frequent key modulations","microtonal quarter-tone inflections","atonal/cluster-based color","bitonal/polytonal flavor"]
      },
      {
        id: "harmony_akkordfarbe",
        label: "Akkordfarbe",
        options: ["triads only","extended chords (7ths, 9ths, 11ths, 13ths)","added-note chords (add9, add11, 6/9)","suspended chords (sus2, sus4)","altered dominants (b9, #9, #11, b13)","diminished 7th chords","half-diminished (m7b5)","major-minor chords","quartal harmony (4ths stacking)","quintal harmony (5ths stacking)","cluster voicings (2nds)","polychords / bitonal stacks","open voicings (wide spread)","close voicings (tight)","drop-2 voicings jazz","drop-3 voicings guitar","shell voicings (3rd+7th)","so what voicings (4ths jazz)","power chords (5ths)","pedal-point harmony","ostinato chord loops","planing / parallel chords","modal interchange borrowing","negative harmony flips","neo-riemannian transformations"]
      },
      {
        id: "harmony_moves",
        label: "Harmonie-Moves",
        options: ["functional cadences (II-V-I, V-I)","plagal motion (IV-I, Amen)","circle of fifths progression","circle of fourths progression","descending 5ths sequence","ascending 5ths sequence","descending bass line (line cliché)","ascending bass lift","pedal drone under changes","modal vamp static","turnaround patterns (I-VI-II-V)","rhythm changes bridge","coltrane changes (giant steps)","backdoor dominant (bVII-I)","tritone substitution","deceptive cadence (V-VI)","interrupted cadence","tierce de picardie (minor→major)","borrowed chords from parallel minor","modal mixture major/minor","pivot-key modulation","direct key shift (no pivot)","step-up modulation (+1 semitone)","step-down modulation (-1 semitone)","relative major/minor swap","parallel major/minor swap","circle modulations (clockwise)","circle modulations (counter-clockwise)","chromatic mediants (third relations)","enharmonic reinterpretation","common-tone modulation","sequence patterns (ascending/descending)","cycle of minor 3rds","cycle of major 3rds","axis system (tonic/subdominant/dominant)"]
      }
    ]
  },
  {
    id: "structure",
    title: "Struktur & Form",
    subLabel: "Songform / Solo / Schluss",
    subcategories: [
      {
        id: "structure_songform",
        label: "Songform",
        options: ["intro→verse→pre→chorus","intro→verse→chorus","verse→hook loop (8/16 bars)","intro→build→drop→break→drop","A→B→build→drop→outro","AABA (jazz standard)","ABAC (fusion head)","head→solos→trading fours→head","theme→variations→coda","riff intro→verse→chorus→bridge→double chorus","breakdown→solo→final head","call-and-response sections","vamp→solo→shout chorus","alap→groove (gat)→fast finale","loop-based beat with 16-bar turnarounds","strophic (AAA) ballad","through-composed narrative","cinematic suite (three cues)","build→fake drop→real drop","polyrhythmic interlude","key change before final chorus","ostinato→layers→climax→denouement","drone swell→texture build→peak→wash","ritornello refrain form","metric modulation middle section","half-time bridge lift","dropout before chorus→impact","tempo ramp to climax"]
      },
      {
        id: "structure_solo",
        label: "Solo-Slots",
        options: ["guitar solo 8 bars","guitar solo 16 bars","bass solo 8 bars","drum solo 4 bars","drum solo 8 bars","sax solo 12 bars","keyboard solo 8 bars","vocal scat solo 8 bars","trading fours (drums + horns)","double guitar harmony solo","tutti ensemble solo","call-and-response solo section","improvisation break 16 bars","modal vamp solo section","chromatic run solo","pentatonic blues solo 12 bars","fusion shred solo 16 bars","ambient texture solo","arpeggiated synth solo 8 bars","rhythmic percussion solo"]
      },
      {
        id: "structure_schluss",
        label: "Schluss",
        options: ["fade-out gradual","abrupt ending on 1","sustained final chord","ritardando slowdown","accelerando speed-up","final chorus repeat x2","outro vamp repeat","coda section 8 bars","tag ending (I-VI-II-V)","plagal cadence amen","perfect authentic cadence","deceptive cadence loop","drone fade to silence","reverse reverb tail out","spoken word outro","children choir finale","gang vocal shout ending","whisper fade","echo delay repeats","vinyl stop scratch","tape stop effect","cymbal crash sustain","bass drop to silence","ring-out natural decay","looped motif fade","final impact hit","silence bar then hit","false ending + return","slow tempo ramp down","sudden cut to black"]
      }
    ]
  },
  {
    id: "vocal",
    title: "Gesang",
    subLabel: "Stimmtyp / Stil / FX",
    subcategories: [
      {
        id: "vocal_stimmtyp",
        label: "Stimmtyp",
        options: ["male baritone lead","male tenor soaring","male bass deep","female alto lead","female mezzo bright","female soprano airy","contralto dark tone","light falsetto lead","vintage crooner lead","male rap lead","female rap lead","lush SATB choir","gospel choir call-and-response","innocent children choir","unison gang vocals"]
      },
      {
        id: "vocal_vortragsstil",
        label: "Vortragsstil",
        options: ["sprechgesang / talk-singing","spoken-word narration","dream-pop buried vocals","scat improvisation","makam-influenced ornaments","latin coros group vocals","overtone throat singing","ornamental raga-style vocal","medieval chant tone","anthemic singalong hook","cute kawaii delivery"]
      },
      {
        id: "vocal_processing",
        label: "Vocal-Processing & FX",
        options: ["chipmunk-pitched hyperpop lead","pitched-down slowed vocals","vocoder/robotic lead","whispered intimate vocal","screamed/harsh vocal","call-and-response vocals","group shout gang vocals","wordless ethnic vocalises","whistling/humming lead","auto-tune effect","heavy reverb/delay vocals","telephone/radio filter vocals","double-tracked vocals","harmonized vocal stacks"]
      }
    ]
  },
  {
    id: "mix",
    title: "Mix & Master",
    subLabel: "Raum & Hall / Stereo / Tonalität",
    subcategories: [
      {
        id: "mix_raum",
        label: "Raum & Hall",
        options: ["dry intimate front","tight booth short ambience","short room on drums","small club room vibe","slapback room 80–120ms","spring reverb on guitars","plate reverb on vocals/keys","bright plate on snare","dark plate for horns","gold foil plate vintage","chamber reverb subtle depth","airy hall on strings","lush concert hall tails","cathedral long tail","shimmer reverb airy highs","non-linear gated reverb","reverse reverb swells","dub space sends","tape echo repeats","ping-pong delay stereo","dotted-eighth delay on hooks","granular cloud reverb","convolution vintage room IR","re-amped room ambience"]
      },
      {
        id: "mix_stereo",
        label: "Stereo & Tiefe",
        options: ["mono-centered focused","moderate stereo width","wide stereo soundstage","extreme stereo imaging","L/R panning contrast","mid-side processing depth","haas effect widening","double-tracking width","chorus-based stereo","reverb-based depth","delay-based depth","frequency-based panning","dynamic panning movement","auto-pan LFO motion","peripheral stereo accents"]
      },
      {
        id: "mix_tonal",
        label: "Tonalziel",
        options: ["warm analog tape saturation","bright digital clarity","balanced neutral response","vintage console coloration","lo-fi cassette degradation","vinyl emulation warmth","tube warmth harmonic richness","transformer saturation weight","air band sparkle boost","sub-bass weight emphasis","midrange presence push","high-mid bite enhancement","dark smooth roll-off","punchy transient emphasis","compressed glue cohesion"]
      }
    ]
  }
];