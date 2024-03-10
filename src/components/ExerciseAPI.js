import Barbell_Bench_Press from '../images/chest/Barbell-Bench-Press.gif';
import chest_press_dumbell from '../images/chest/Chest_press_dumbell.gif';
import chest_press_machine from '../images/chest/chest_press_machine.gif';
import chest_fly_dumbell from '../images/chest/chest-fly-dumbell.gif';
import decline_dumbell_press from '../images/chest/decline-dumbell-press.gif';
import flat_press_bar from '../images/chest/flat_press_bar.gif';
import incline_dumbell_press from '../images/chest/Incline-Dumbbell-Press.gif';
import pec_deck_fly from '../images/chest/Pec-Deck-Fly.gif';
import push_up_plus from '../images/chest/Push-Up-Plus.gif';
import push_up from '../images/chest/Push-Ups.gif';

import back_extension from '../images/back/back-extension.gif';
import chestsupportedrow from '../images/back/chestsupportedrow.gif';
import one_arm_rowing from '../images/back/one-arm-rowing.gif'
import high_pully_overhead from '../images/back/high-pully-overhead.gif' ;
import lat_pulldown from '../images/back/Lat-Pulldown.gif';
import pull_up_deep_chin_machine from '../images/back/pull-up-deep-chin-machine.gif' ;
import seated_rowing from '../images/back/seated-rowing.gif' ;

import biceps_concentration from  '../images/biceps/biceps-concentration.gif' ;
import biceps_dumbell_curl from '../images/biceps/biceps-dumbell-curl.gif' ;
import biceps_hammer_curl from '../images/biceps/biceps-hammer-curl.gif' ;
import cable_curl from '../images/biceps/cable-curl.gif' ;
import Crunch_With_Leg_Rise from '../images/biceps/Crunch-With-Leg-Raise.gif' ;
import hyperextension from '../images/biceps/hyperextension.gif' ;
import knee_touch_crunch from '../images/biceps/knee-touch-crunch.gif' ;
import prichar_curl_machine from '../images/biceps/prichar-curl-machine.gif' ;
import pull_up_deep_chin from '../images/biceps/pull-up-deep-chin.gif' ;

import bodyweight_forward_lunge from '../images/legs/bodyweight-forward-lunge.gif' ;
import bodyweight_squat from '../images/legs/bodyweight-squat.gif' ;
import calf_rise_machine from '../images/legs/calf-rise-machine.jpg' ;
import leg_curl from '../images/legs/leg-curl.gif' ;
import leg_extension from '../images/legs/leg-extension.gif' ;
import side_leg_rise from '../images/legs/side-leg-rise.gif' ;
import sumo_squat from '../images/legs/sumo-squat.gif' ;

import barbell_shrug_muscles from '../images/shoulder/barbell-shrug-muscles.gif' ;
import bench_crunch_exercise from '../images/shoulder/bench-crunch-exercise.gif' ;
import front_Raise_Shoulders from '../images/shoulder/Front-Raise_Shoulders.gif' ;
import kettlebell_upright_row from '../images/shoulder/kettlebell-upright-row.gif' ;
import Lateral_raise from '../images/shoulder/lateral-raise.gif' ;
import Reverse_Crunch from '../images/shoulder/Reverse-Crunch.gif' ;
import Shoulder_press_bar from '../images/shoulder/shoulder-press-bar.webp'  ;
import shoulder_press_dumbell from '../images/shoulder/shoulder-press-dumbell.gif'
import shoulder_press_machine from '../images/shoulder/shoulder-press-machine.gif'

import tricep_preach_standing_exercise from '../images/triceps/tricep-preach-standing-exercise.gif' ;
import triceps_back_dips from '../images/triceps/Triceps-back-Dips.gif' ;
import tricep_cable_extension from '../images/triceps/tricep-cable-extension.gif' ;
import triceps_overhead from '../images/triceps/triceps-overhead.gif' ;
import triceps_preach_press_lying from '../images/triceps/triceps-preach-press-lying.gif' ;
import triceps_single_arm from '../images/triceps/triceps-single-arm.webp' ;

const exercises = [
    //chest
    { name: 'Barbell bench press', gifPath: Barbell_Bench_Press, youtubeLink: 'https://youtu.be/rT7DgCr-3pg?si=2WrfNoHCr5JQCLy0' },
    { name: 'Chest press dumbell', gifPath: chest_press_dumbell, youtubeLink:'https://youtu.be/VmB1G1K7v94?si=4aSe38y2rmvcjiai'},
    { name: 'Chest press machine', gifPath: chest_press_machine, youtubeLink: 'https://youtu.be/xUm0BiZCWlQ?si=WhBqM4YY_803WBNr' },
    { name: 'Chest fly dumbell', gifPath: chest_fly_dumbell, youtubeLink: 'https://youtu.be/QENKPHhQVi4?si=EBNWa0Z79-Rsf8rV' },
    { name: 'Decline dumbell press', gifPath: decline_dumbell_press, youtubeLink: 'https://youtu.be/0xRvl4Qv3ZY?si=ynEb_7tyQpNmj03U' },
    { name: 'Flat press bar', gifPath: flat_press_bar, youtubeLink: 'https://youtu.be/rT7DgCr-3pg?si=6wbSWNQ5VdawZ83I' },
    { name: 'Incline dumbell press', gifPath: incline_dumbell_press, youtubeLink: 'https://youtu.be/IP4oeKh1Sd4?si=VKdDLn_MXcyIwO6H' },
    { name: 'Pec deck fly', gifPath: pec_deck_fly, youtubeLink: 'https://youtu.be/eGjt4lk6g34?si=d7eE29wu5SRZUSvA' },
    { name: 'push up plus', gifPath: push_up_plus, youtubeLink: 'https://youtu.be/YTAyc2uf_d0?si=69SoBwvvrYJjEVKp' },
    { name: 'Push ups', gifPath: push_up, youtubeLink: 'https://youtube.com/shorts/ba8tr1NzwXU?si=kvxTrECW8MHpmS2X'},
    // back
    { name: 'Back extension', gifPath: back_extension, youtubeLink: 'https://youtu.be/vx0jZBEmZcE?si=4pilBL0HywtOc3fY' },
    { name: 'Supported Chest row', gifPath: chestsupportedrow, youtubeLink: 'https://youtube.com/shorts/889p8VAP56s?si=izwMnALtWJ7I-Czm' },
    { name: 'High pully overhead', gifPath: high_pully_overhead, youtubeLink: 'https://youtu.be/r1f0JVPSZvw?si=K_HgDsWYeAXGYLlv'},
    { name: 'Lat pulldown', gifPath: lat_pulldown, youtubeLink: 'https://youtube.com/shorts/MUKAzJEsouo?si=4kHRo1E_5GTkaZIX' },
    { name: 'One arm rowing', gifPath: one_arm_rowing, youtubeLink: 'https://youtu.be/dFzUjzfih7k?si=ze9j1PQASc-exU-3' },
    { name: 'Pullup deep chin machine', gifPath: pull_up_deep_chin_machine, youtubeLink: 'https://youtube.com/shorts/dc-MFszIdaA?si=XY6D9pFVWE8fHpZD' },
    { name: 'Seated rowing', gifPath:  seated_rowing, youtubeLink: 'https://youtu.be/xQNrFHEMhI4?si=n_X_JvXQtKQlMf5x' },
    // biceps
    { name: 'Biceps concentration', gifPath:biceps_concentration, youtubeLink: 'https://youtu.be/0AUGkch3tzc?si=WifXnEFGqpelhUsk' },
    { name: 'Biceps dumbell curl', gifPath:  biceps_dumbell_curl, youtubeLink:'https://youtu.be/ykJmrZ5v0Oo?si=KNP0io-cf1-C0Obl' },
    { name: 'Biceps hammer curl', gifPath: biceps_hammer_curl, youtubeLink: 'https://youtu.be/TwD-YGVP4Bk?si=ApjEpI6fB7E4UDMD' },
    { name: 'Cable curl', gifPath: cable_curl, youtubeLink: 'https://youtu.be/NFzTWp2qpiE?si=HHj4rPbnYpAzlCsN' },
    { name: 'Leg rise crunches', gifPath: Crunch_With_Leg_Rise, youtubeLink: 'https://youtu.be/O_H8OQG9RoM?si=lnWlQigLnEP-tQYc' },
    { name: 'Hyperextension', gifPath: hyperextension, youtubeLink: 'https://youtu.be/qPYzvaj0ffY?si=l9X_6sujt-rzOB_r' },
    { name: 'Knee touch crunch', gifPath:knee_touch_crunch, youtubeLink: 'https://youtu.be/7O7yr4xY_1g?si=Y-5y9fxnfT9m4Pjg' },
    { name: 'Prichar curl', gifPath: prichar_curl_machine, youtubeLink: 'https://youtu.be/Ja6ZlIDONac?si=5YVLn9ojNvnAJftK' },
    { name: 'Pull up deep chin', gifPath: pull_up_deep_chin, youtubeLink: 'https://youtu.be/75ik0_hhDUE?si=1Ab6O17gQmpiw3yP' },
    //legs
    { name: 'forward lunges', gifPath: bodyweight_forward_lunge, youtubeLink:'https://youtu.be/fqKK8YJmx4A?si=ccCzlGVLyt3N1ZnS' },
    { name: 'Bodyweight squat', gifPath: bodyweight_squat, youtubeLink: 'https://youtube.com/shorts/AIZ8q1qruKw?si=8xgiWfR8emE-xXf7' },
    { name: 'Calf rise machine', gifPath:calf_rise_machine, youtubeLink: 'https://youtu.be/JbyjNymZOt0?si=eT9DWjeQC9q3DJA6' },
    { name: 'Leg curl', gifPath: leg_curl, youtubeLink: 'https://youtu.be/SbSNUXPRkc8?si=huo93bGSRIfl5PAv' },
    { name: 'leg-extension', gifPath:leg_extension, youtubeLink: ' https://youtu.be/Orxowest56U?si=i0pNntw10cq-hiFC'},
    { name: 'side leg rise', gifPath: side_leg_rise, youtubeLink: 'https://youtu.be/JRmu-BJw698?si=7f-im4qEBkkH6qXH' },
    { name: 'sumo squat', gifPath: sumo_squat, youtubeLink: 'https://youtu.be/kjlfpqXnyL8?si=69e7e8PtHlzUKBgV' },
    //shoulder
    { name: 'Barbell shrug muscles', gifPath: barbell_shrug_muscles, youtubeLink: 'https://youtu.be/zfAHfyTB_Ao?si=cbuJsSHgolwqu99a' },
    { name: 'Bench crunch exercise', gifPath: bench_crunch_exercise, youtubeLink: 'https://youtu.be/RVrBJAPo868?si=HB2dLqP2fcxmvE0K' },
    // { name: 'Crunch with leg rise', gifPath: Crunch_With_Leg_Rise },
    { name: 'Front rise shoulders', gifPath: front_Raise_Shoulders, youtubeLink: 'https://youtu.be/sOcYlBI85hc?si=2Q7-4Erv6JcuOJei' },
    { name: 'Kettlebell upright row', gifPath: kettlebell_upright_row, youtubeLink: 'https://youtu.be/KpM-YO3icao?si=tAlR6FPhP0Db1Ut0' },
    { name: 'Lateral rise', gifPath: Lateral_raise, youtubeLink: 'https://youtu.be/3VcKaXpzqRo?si=ZU6uJkSWkKee1GDw' },
    { name: 'Reverse crunch', gifPath: Reverse_Crunch, youtubeLink: 'https://youtu.be/hyv14e2QDq0?si=s69rc36ZVkv5pi1p' },
    { name: 'Shoulder press bar', gifPath: Shoulder_press_bar, youtubeLink: 'https://youtube.com/shorts/OLePvpxQEGk?si=WJy6tL6681zoMoNG' },
    { name: 'Shoulder press dumbell', gifPath: shoulder_press_dumbell, youtubeLink: 'https://youtube.com/shorts/OLePvpxQEGk?si=kPiqSSpCsqRaz2RV' },
    { name: 'Shoulder press machine', gifPath: shoulder_press_machine, youtubeLink: 'https://youtu.be/3R14MnZbcpw?si=CWArsLTC3b_47s-8' },
    // triceps
    { name: 'Tricep preach standing exercise', gifPath: tricep_preach_standing_exercise, youtubeLink: 'https://youtu.be/wK9MlojKdJU?si=9-TZAW8fUT0W-Yr9' },
    { name: 'Triceps back dips', gifPath: triceps_back_dips, youtubeLink: 'https://youtube.com/shorts/KIUsudC0wQI?si=kR92HUE8ZhPPsj4n'  },
    { name: 'Tricep cable extension', gifPath: tricep_cable_extension, youtubeLink: 'https://youtu.be/JDEDaZTEzGE?si=BgGzaEImzx1j731r' },
    { name: 'Triceps overhead', gifPath: triceps_overhead, youtubeLink: 'https://youtu.be/-Vyt2QdsR7E?si=apSryCIS8EVCa8Yu' },
    { name: 'Triceps preach press lying', gifPath:triceps_preach_press_lying, youtubeLink: 'https://youtu.be/ernSa92jYKc?si=-sJhvzShK1MuKfK4' },
    { name: 'Triceps single arm', gifPath: triceps_single_arm, youtubeLink: 'https://youtu.be/lUKXtm-i21U?si=E9I56IsUFqYOCMwj' },
  ];

export default exercises;
