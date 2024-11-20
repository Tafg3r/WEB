const themes = {
    DARK: "dark",
    LIGHT: "light",
}

let currentTheme = "dark"

function switchCurrThemeVar() {
    if (currentTheme === themes.DARK) {
        currentTheme = themes.LIGHT
        return
    }
    currentTheme = themes.DARK
}

const darkThemeCombinations = [
    {
        header: "linear-gradient(90deg, #0f2027, #203a43)",
        background: "linear-gradient(120deg, #000000, #434343)"
    },
    {
        header: "linear-gradient(90deg, #232526, #414345)",
        background: "linear-gradient(120deg, #181818, #2c3e50)"
    },
    {
        header: "linear-gradient(90deg, #141e30, #243b55)",
        background: "linear-gradient(120deg, #101010, #1b1b1b)"
    },
]

const lightThemeCombinations = [
    {
        header: "linear-gradient(90deg, #d9e4f5, #f7f9fc)",
        background: "linear-gradient(120deg, #ffffff, #e0e0e0)"
    },
    {
        header: "linear-gradient(90deg, #f5f7fa, #c3cfe2)",
        background: "linear-gradient(120deg, #ffffff, #d9d9d9)"
    },
    {
        header: "linear-gradient(90deg, #e6eefc, #fdfbfb)",
        background: "linear-gradient(120deg, #f8f8f8, #ececec)"
    },
]

const textThemesColors = {
    "dark": "#fff",
    "light": "#000"
}

let darkThemeIndex = 0, lightThemeIndex = 0

function standTheme(workerIndex, workerThemes) {
    let currConfig = workerThemes[workerIndex]
    document.querySelector("header").style.background = currConfig.header
    document.querySelector("footer").style.background = currConfig.header
    document.body.style.background = currConfig.background;
    document.body.style.color = textThemesColors[currentTheme]
}

function switchBackground() {
    let workerIndex = darkThemeIndex, workerThemes = darkThemeCombinations
    if (currentTheme === themes.LIGHT) {
        workerIndex = lightThemeIndex
        workerThemes = lightThemeCombinations
    }

    workerIndex = (workerIndex + 1) % workerThemes.length
    standTheme(workerIndex, workerThemes)

    if (currentTheme === themes.DARK) {
        darkThemeIndex = workerIndex
        return
    }
    lightThemeIndex = workerIndex
}

function switchTheme() {
    switchCurrThemeVar()
    switchBackground()
}

export function addSwitchThemesButtonListeners() {
    document.getElementById("btn-change-background").addEventListener(
        'click',
        switchBackground
    )
    document.getElementById("btn-change-theme").addEventListener(
        'click',
        switchTheme
    )
    switchBackground()
}