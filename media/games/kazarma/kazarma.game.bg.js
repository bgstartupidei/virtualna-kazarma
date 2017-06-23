// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "virtualna-kazarma.bgstartupidei.com";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        `<h1>От донаборник в наборник</h1>
        <p>Дойде и твоят ред да служиш на родината.</p> <p>Денят е слънчев,
        птичките пеят, майка ти плаче, баща ти се тюхка около нея и не
        знае какво да каже.</p>
        <p>Прегръщаш ги, вдигаш багажа си на рамо и се насочваш към
        в който мудно се вливат и други младежи като теб.</p>
        <p class='transient'>Влез в <a href='hub'>казармата</a></p>`
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    "implicit-map": new undum.Situation({
        tags: ["school-choices", "shooting-range-choices"],
        enter: function(character, system, from) {
            system.doLink('hub');
        },
        optionText: "Обратно към картата",
        displayOrder: 10,
    })
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    health: new undum.IntegerQuality(
        "Здраве", {priority:"0001", group:'stats'}
    ),
    intelligence: new undum.IntegerQuality(
        "Интелигентност", {priority:"0001", group:'stats'}
    ),
    fear: new undum.IntegerQuality(
        "Страх", {priority:"0001", group:'stats'}
    ),
    obedience: new undum.IntegerQuality(
        "Подчинение", {priority:"0001", group:'stats'}
    ),
    days: new undum.IntegerQuality(
        "Дни", {priority:"0001", group:'progress'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.health = 100;
    character.qualities.intelligence = 100;
    character.qualities.fear = 0;
    character.qualities.obedience = 0;
    system.setCharacterText("<p>Началото на службата.</p>");
};
