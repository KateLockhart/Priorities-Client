
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';

export const About = () => {
    return (
        <div>
            <h2>Future Org about page.</h2>

            <List>
                <ListItem alignItems='flex-start'>
                    <ListItemAvatar>
                        <Avatar>
                            <Diversity1RoundedIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Diversity' secondary='We believe in a diverse and welcoming environment where each employee is included in every aspect of who we are as a company and team.'/>
                </ListItem>
                <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                        <Avatar>
                            <Diversity2RoundedIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Collaboration' secondary='Without collaboration and team effort, none of our progress would be possible. Every team member is essential and valued in all we do.'/>
                </ListItem>
                <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                        <Avatar>
                            <Diversity3RoundedIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Communication' secondary='No collaboration would be possible without valuing communication: the freedom to express all thoughts and ideas on our projects, work environment, and process. Communication is key to our personal growth, autonomy, and project success from within the team, with customers, and all app users. Communication is key to a positive and balanced work environment for all individuals.'/>
                </ListItem>
            </List>
            
            
        </div>
    )
}