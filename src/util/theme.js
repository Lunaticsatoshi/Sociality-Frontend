export default {
    palette: {
        primary: {
          light: "#33c9dc",
          main: "#242526",
          dark: "#008394",
          contrastText: "#fff",
        },
        secondary: {
          light: "#ff6333",
          main: "#ff3d00",
          dark: "#b22a00",
          contrastText: "#fff",
        },
      },
      typography: {
        useNextVariants: true
      },
      form: {
        textAlign: "center",
        color: "white",
      },
      header: {
        fontSize: 32,
        margin: "20px auto 20px auto",
      },
      textField: {
        borderRadius: 25,
        margin: "20px auto 20px auto",
        /* backgroundColor: "white", */
        [`& fieldset`]: {
          borderRadius: 25,
        },
      },
      button: {
        marginTop: 20,
        backgroundColor: "red",
        borderRadius: 25,
        position: 'relative'
      },
      customError: {
        color: 'red',
        fontSize: '0.8rem',
      },
      progress: {
        position: 'absolute'
      }
}