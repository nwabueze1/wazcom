import { createUseStyles } from 'react-jss'

export const useSidebarListItemStyles = createUseStyles({
    root: {
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        boxSizing: 'content-box',
    },
    list: {
        listStyle: "none",
        overflow: "hidden",
        padding: 0
    },
    listItem: {
        margin: 0,
        padding: 0,
        "& h5": {
            textTransform: "uppercase",
        },
        borderBottom: '1px solid #E8E8E8',
        marginRight: '10px',
    },
    label: {},
    chevronIcon: {
        transition: "transform 0.1s ease-in",
        width: '24px',
        height: '24px'
    },
    button: {
        width: '200px',
        backgroundColor: 'white',
        color: '#343E37',
        fontSize: '14px',
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'left',
        opacity: 1
    },
    isVisible: {
        minHeight: 200,
        height: "auto",
    },
    isNotVisible: {
        maxHeight: 0,
    },
    innerList: {
        listStyle: "none",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        gap: '10px',
        padding: 0,
    },
    innerListItem: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '1px',
        width: '200px',
        height: '33px',
        color: '#010E05',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'
    },
    link: {
        width: '100%',
        fontSize: '12px',
        textAlign: 'left',
        padding: '0 20px',
        textDecoration: 'none',
        color: '#010E05',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center'


    },
    linkActive: {
        background: '#010E05 0% 0% no-repeat padding-box',
        color: '#FAFAFA',
        fontWeight: 600,
        fontSize: '12px',
        borderRadius: '1px',
        padding: '0 20px',
        height: '33px',
    },

    sectionLabel: {
        color: '#343E37',
        fontWeight: 'normal',
        fontSize: '8px',
    }
});
