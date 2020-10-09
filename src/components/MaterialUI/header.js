import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge } from "@material-ui/core";
import { More as MoreIcon, Menu as MenuIcon, Search as SearchIcon, Mail as MailIcon, Notifications as NotificationsIcon, AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header(props) {

  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Material-UI
        </Typography>
        <div className = { styles.search }>
          <div className = { styles.searchIcon }>
            <SearchIcon />
          </div>
          <InputBase
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            placeholder={props.searchTerm}
            inputProps={{ "aria-label": "search" }}
            onKeyPress = {onSearchTermKeypress}
          />
        </div>
        <div style={{flexGrow: 1}} />
        <div>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div>
          <IconButton
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );

  // Push search term to parent state
  function onSearchTermKeypress(e){
    if (e.key === 'Enter') {
      props.setSearchTerm(e.target.value);
    }
  }

}
