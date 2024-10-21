import { ExpertiseCardProps } from "../interfaces/ExpertiseInterface";
import web from '../../static/Services/web.svg'
import mobile from '../../static/Services/mobile.svg'
import ui from '../../static/Services/ui.svg'
import dataProcess from '../../static/Services/dataProcess.svg'
import dataMining from '../../static/Services/dataMining.svg'
import dataAnalytics from '../../static/Services/dataAnalytics.svg'
import bia from '../../static/Services/bia.svg'
import automation from '../../static/Services/automation.svg'


export const expertiseItems: ExpertiseCardProps[] = [
    { icon: web, expertiseName: "Web Development", heading: "Frontend & Backend", description: "Building responsive and dynamic websites." },
    { icon: mobile, expertiseName: "Mobile Development", heading: "iOS & Android", description: "Creating smooth and engaging mobile apps." },
    { icon: ui, expertiseName: "UI/UX Design", heading: "User-Centered Design", description: "Designing intuitive and beautiful interfaces." },
    { icon: dataProcess, expertiseName: "Data Science", heading: "Data Analysis", description: "Deriving insights from data." },
    { icon: dataMining, expertiseName: "Machine Learning", heading: "AI Solutions", description: "Implementing intelligent algorithms." },
    { icon: dataAnalytics, expertiseName: "Data Analytics", heading: "AWS & Azure", description: "Reliable and scalable cloud solutions." },
    { icon: bia, expertiseName: "Digital Marketing", heading: "SEO & Content", description: "Boosting online presence effectively." },
    { icon: automation, expertiseName: "Project Management", heading: "Agile & Scrum", description: "Organizing and leading teams efficiently." },
];