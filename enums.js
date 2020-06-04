var WorldNr;
(function (WorldNr) {
    WorldNr[WorldNr["OSM"] = 0] = "OSM";
    WorldNr[WorldNr["OFM"] = 1] = "OFM";
    WorldNr[WorldNr["Dev"] = 2] = "Dev";
})(WorldNr || (WorldNr = {}));
var ScreenSize;
(function (ScreenSize) {
    ScreenSize[ScreenSize["Xs"] = 0] = "Xs";
    ScreenSize[ScreenSize["Sm"] = 1] = "Sm";
    ScreenSize[ScreenSize["Md"] = 2] = "Md";
    ScreenSize[ScreenSize["Lg"] = 3] = "Lg";
})(ScreenSize || (ScreenSize = {}));
var PartialState;
(function (PartialState) {
    PartialState[PartialState["Loading"] = 0] = "Loading";
    PartialState[PartialState["Success"] = 1] = "Success";
    PartialState[PartialState["Error"] = 2] = "Error";
})(PartialState || (PartialState = {}));
var PaidGameOption;
(function (PaidGameOption) {
    PaidGameOption[PaidGameOption["UpgradeStadium"] = 0] = "UpgradeStadium";
    PaidGameOption[PaidGameOption["BoostStadium"] = 1] = "BoostStadium";
    PaidGameOption[PaidGameOption["StartTraining"] = 2] = "StartTraining";
    PaidGameOption[PaidGameOption["BoostTraining"] = 3] = "BoostTraining";
    PaidGameOption[PaidGameOption["SendScout"] = 4] = "SendScout";
    PaidGameOption[PaidGameOption["BoostScout"] = 5] = "BoostScout";
    PaidGameOption[PaidGameOption["StartLawyerCase"] = 6] = "StartLawyerCase";
    PaidGameOption[PaidGameOption["StartDoctorTreatment"] = 7] = "StartDoctorTreatment";
    PaidGameOption[PaidGameOption["TransferPlayer"] = 8] = "TransferPlayer";
    PaidGameOption[PaidGameOption["BoostLawyerCase"] = 9] = "BoostLawyerCase";
    PaidGameOption[PaidGameOption["BoostDoctorTreatment"] = 10] = "BoostDoctorTreatment";
    PaidGameOption[PaidGameOption["SecretTraining"] = 11] = "SecretTraining";
    PaidGameOption[PaidGameOption["Camp"] = 12] = "Camp";
    PaidGameOption[PaidGameOption["Spy"] = 13] = "Spy";
    PaidGameOption[PaidGameOption["BoostSpy"] = 14] = "BoostSpy";
    PaidGameOption[PaidGameOption["PickUnavailableTeam"] = 15] = "PickUnavailableTeam";
    PaidGameOption[PaidGameOption["CreateClosedLeague"] = 16] = "CreateClosedLeague";
    PaidGameOption[PaidGameOption["ContinueCustomLeague"] = 17] = "ContinueCustomLeague";
    PaidGameOption[PaidGameOption["CreateCrew"] = 18] = "CreateCrew";
    PaidGameOption[PaidGameOption["QuickSell"] = 19] = "QuickSell";
})(PaidGameOption || (PaidGameOption = {}));
var StaffMemberType;
(function (StaffMemberType) {
    StaffMemberType[StaffMemberType["Spy"] = 0] = "Spy";
    StaffMemberType[StaffMemberType["AttackerCoach"] = 1] = "AttackerCoach";
    StaffMemberType[StaffMemberType["MidfielderCoach"] = 2] = "MidfielderCoach";
    StaffMemberType[StaffMemberType["DefenderCoach"] = 3] = "DefenderCoach";
    StaffMemberType[StaffMemberType["GoalkeeperCoach"] = 4] = "GoalkeeperCoach";
    StaffMemberType[StaffMemberType["Scout"] = 5] = "Scout";
    StaffMemberType[StaffMemberType["Doctor"] = 6] = "Doctor";
    StaffMemberType[StaffMemberType["Lawyer"] = 7] = "Lawyer";
})(StaffMemberType || (StaffMemberType = {}));
var SpecialistType;
(function (SpecialistType) {
    SpecialistType[SpecialistType["Captain"] = 0] = "Captain";
    SpecialistType[SpecialistType["Penalty"] = 1] = "Penalty";
    SpecialistType[SpecialistType["FreeKick"] = 2] = "FreeKick";
    SpecialistType[SpecialistType["Corners"] = 3] = "Corners";
})(SpecialistType || (SpecialistType = {}));
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition[PlayerPosition["None"] = 0] = "None";
    PlayerPosition[PlayerPosition["A"] = 1] = "A";
    PlayerPosition[PlayerPosition["M"] = 2] = "M";
    PlayerPosition[PlayerPosition["D"] = 3] = "D";
    PlayerPosition[PlayerPosition["G"] = 4] = "G";
})(PlayerPosition || (PlayerPosition = {}));
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus[PlayerStatus["Available"] = 0] = "Available";
    PlayerStatus[PlayerStatus["Injured"] = 1] = "Injured";
    PlayerStatus[PlayerStatus["Suspended"] = 2] = "Suspended";
})(PlayerStatus || (PlayerStatus = {}));
var AssetType;
(function (AssetType) {
    AssetType[AssetType["SmallPassport"] = 0] = "SmallPassport";
    AssetType[AssetType["NormalPassport"] = 1] = "NormalPassport";
    AssetType[AssetType["SmallCrest"] = 3] = "SmallCrest";
    AssetType[AssetType["NormalCrest"] = 4] = "NormalCrest";
    AssetType[AssetType["SmallLeague"] = 6] = "SmallLeague";
    AssetType[AssetType["NormalLeague"] = 7] = "NormalLeague";
})(AssetType || (AssetType = {}));
var AvatarType;
(function (AvatarType) {
    AvatarType[AvatarType["Player"] = 0] = "Player";
    AvatarType[AvatarType["Cpu"] = 1] = "Cpu";
})(AvatarType || (AvatarType = {}));
var FeedbackType;
(function (FeedbackType) {
    FeedbackType[FeedbackType["Error"] = 0] = "Error";
    FeedbackType[FeedbackType["Success"] = 1] = "Success";
})(FeedbackType || (FeedbackType = {}));
var TeamTrainingType;
(function (TeamTrainingType) {
    TeamTrainingType[TeamTrainingType["Secret"] = 1] = "Secret";
    TeamTrainingType[TeamTrainingType["Camp"] = 2] = "Camp";
})(TeamTrainingType || (TeamTrainingType = {}));
var MatchType;
(function (MatchType) {
    MatchType[MatchType["League"] = 0] = "League";
    MatchType[MatchType["Cup"] = 1] = "Cup";
    MatchType[MatchType["Friendly"] = 2] = "Friendly";
})(MatchType || (MatchType = {}));
var StadiumPartType;
(function (StadiumPartType) {
    StadiumPartType[StadiumPartType["Capacity"] = 0] = "Capacity";
    StadiumPartType[StadiumPartType["Pitch"] = 1] = "Pitch";
    StadiumPartType[StadiumPartType["TrainingFacility"] = 2] = "TrainingFacility";
})(StadiumPartType || (StadiumPartType = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["Descending"] = 0] = "Descending";
    SortOrder[SortOrder["Ascending"] = 1] = "Ascending";
})(SortOrder || (SortOrder = {}));
var GameVarCategory;
(function (GameVarCategory) {
    GameVarCategory[GameVarCategory["BossCoinPrice"] = 0] = "BossCoinPrice";
    GameVarCategory[GameVarCategory["Timer"] = 1] = "Timer";
    GameVarCategory[GameVarCategory["Training"] = 2] = "Training";
    GameVarCategory[GameVarCategory["TeamTraining"] = 3] = "TeamTraining";
    GameVarCategory[GameVarCategory["Stadium"] = 4] = "Stadium";
    GameVarCategory[GameVarCategory["Doctor"] = 5] = "Doctor";
    GameVarCategory[GameVarCategory["ClubFundsPrice"] = 6] = "ClubFundsPrice";
    GameVarCategory[GameVarCategory["ClubFunds"] = 7] = "ClubFunds";
    GameVarCategory[GameVarCategory["ChooseTeam"] = 8] = "ChooseTeam";
    GameVarCategory[GameVarCategory["Manager"] = 9] = "Manager";
    GameVarCategory[GameVarCategory["Reward"] = 10] = "Reward";
    GameVarCategory[GameVarCategory["TeamSlotUnlock"] = 11] = "TeamSlotUnlock";
    GameVarCategory[GameVarCategory["Surfacing"] = 12] = "Surfacing";
    GameVarCategory[GameVarCategory["Sponsors"] = 13] = "Sponsors";
    GameVarCategory[GameVarCategory["Scout"] = 14] = "Scout";
    GameVarCategory[GameVarCategory["Onboarding"] = 15] = "Onboarding";
    GameVarCategory[GameVarCategory["Crews"] = 16] = "Crews";
    GameVarCategory[GameVarCategory["Transfer"] = 17] = "Transfer";
})(GameVarCategory || (GameVarCategory = {}));
var AgeCategory;
(function (AgeCategory) {
    AgeCategory[AgeCategory["NoPreference"] = 0] = "NoPreference";
    AgeCategory[AgeCategory["Young"] = 1] = "Young";
    AgeCategory[AgeCategory["Experienced"] = 2] = "Experienced";
    AgeCategory[AgeCategory["Veteran"] = 3] = "Veteran";
})(AgeCategory || (AgeCategory = {}));
var PlayerQualityRange;
(function (PlayerQualityRange) {
    PlayerQualityRange[PlayerQualityRange["NoPreference"] = 0] = "NoPreference";
    PlayerQualityRange[PlayerQualityRange["AroundFifty"] = 6] = "AroundFifty";
    PlayerQualityRange[PlayerQualityRange["AroundSixty"] = 7] = "AroundSixty";
    PlayerQualityRange[PlayerQualityRange["AroundSeventy"] = 8] = "AroundSeventy";
    PlayerQualityRange[PlayerQualityRange["AroundEighty"] = 9] = "AroundEighty";
    PlayerQualityRange[PlayerQualityRange["AroundNinety"] = 10] = "AroundNinety";
})(PlayerQualityRange || (PlayerQualityRange = {}));
var PlayerStyle;
(function (PlayerStyle) {
    PlayerStyle[PlayerStyle["NoPreference"] = 0] = "NoPreference";
    PlayerStyle[PlayerStyle["AttackMinded"] = 1] = "AttackMinded";
    PlayerStyle[PlayerStyle["Balanced"] = 2] = "Balanced";
    PlayerStyle[PlayerStyle["DefensiveMinded"] = 3] = "DefensiveMinded";
})(PlayerStyle || (PlayerStyle = {}));
var ScoutResult;
(function (ScoutResult) {
    ScoutResult[ScoutResult["NoAction"] = 0] = "NoAction";
    ScoutResult[ScoutResult["Searching"] = 1] = "Searching";
    ScoutResult[ScoutResult["Success"] = 2] = "Success";
})(ScoutResult || (ScoutResult = {}));
var TransferPlayerType;
(function (TransferPlayerType) {
    TransferPlayerType[TransferPlayerType["Transferlist"] = 0] = "Transferlist";
    TransferPlayerType[TransferPlayerType["SpecialOffer"] = 1] = "SpecialOffer";
    TransferPlayerType[TransferPlayerType["Scout"] = 2] = "Scout";
    TransferPlayerType[TransferPlayerType["QuickSell"] = 3] = "QuickSell";
    TransferPlayerType[TransferPlayerType["CashBuy"] = 4] = "CashBuy";
    TransferPlayerType[TransferPlayerType["Legend"] = 5] = "Legend";
    TransferPlayerType[TransferPlayerType["InForm"] = 6] = "InForm";
})(TransferPlayerType || (TransferPlayerType = {}));
var FoulType;
(function (FoulType) {
    FoulType[FoulType["RedCard"] = 1] = "RedCard";
    FoulType[FoulType["YellowCard"] = 2] = "YellowCard";
})(FoulType || (FoulType = {}));
var ProgressOrderType;
(function (ProgressOrderType) {
    ProgressOrderType[ProgressOrderType["Ascending"] = 0] = "Ascending";
    ProgressOrderType[ProgressOrderType["Descending"] = 1] = "Descending";
})(ProgressOrderType || (ProgressOrderType = {}));
var ProgressNotationType;
(function (ProgressNotationType) {
    ProgressNotationType[ProgressNotationType["Amount"] = 0] = "Amount";
    ProgressNotationType[ProgressNotationType["Percentage"] = 1] = "Percentage";
})(ProgressNotationType || (ProgressNotationType = {}));
var AchievementLevel;
(function (AchievementLevel) {
    AchievementLevel[AchievementLevel["Beginner"] = 0] = "Beginner";
    AchievementLevel[AchievementLevel["Intermediate"] = 1] = "Intermediate";
    AchievementLevel[AchievementLevel["Expert"] = 2] = "Expert";
})(AchievementLevel || (AchievementLevel = {}));
var MatchResult;
(function (MatchResult) {
    MatchResult[MatchResult["Unknown"] = 0] = "Unknown";
    MatchResult[MatchResult["Won"] = 1] = "Won";
    MatchResult[MatchResult["Lost"] = 2] = "Lost";
    MatchResult[MatchResult["Drew"] = 3] = "Drew";
})(MatchResult || (MatchResult = {}));
var BidSentBy;
(function (BidSentBy) {
    BidSentBy[BidSentBy["Unknown"] = 0] = "Unknown";
    BidSentBy[BidSentBy["Owner"] = 1] = "Owner";
    BidSentBy[BidSentBy["Bidder"] = 2] = "Bidder";
})(BidSentBy || (BidSentBy = {}));
var LeagueGroupType;
(function (LeagueGroupType) {
    LeagueGroupType[LeagueGroupType["Favourite"] = 0] = "Favourite";
    LeagueGroupType[LeagueGroupType["Major"] = 1] = "Major";
    LeagueGroupType[LeagueGroupType["Minor"] = 2] = "Minor";
    LeagueGroupType[LeagueGroupType["Fantasy"] = 4] = "Fantasy";
    LeagueGroupType[LeagueGroupType["Beta"] = 5] = "Beta";
})(LeagueGroupType || (LeagueGroupType = {}));
var LeagueTypeGroup;
(function (LeagueTypeGroup) {
    LeagueTypeGroup[LeagueTypeGroup["Favourites"] = 0] = "Favourites";
    LeagueTypeGroup[LeagueTypeGroup["Europe"] = 1] = "Europe";
    LeagueTypeGroup[LeagueTypeGroup["Asia"] = 2] = "Asia";
    LeagueTypeGroup[LeagueTypeGroup["Africa"] = 3] = "Africa";
    LeagueTypeGroup[LeagueTypeGroup["America"] = 4] = "America";
    LeagueTypeGroup[LeagueTypeGroup["Special"] = 5] = "Special";
    LeagueTypeGroup[LeagueTypeGroup["Beta"] = 6] = "Beta";
    LeagueTypeGroup[LeagueTypeGroup["Tournament"] = 7] = "Tournament";
    LeagueTypeGroup[LeagueTypeGroup["WinnersLeague"] = 8] = "WinnersLeague";
})(LeagueTypeGroup || (LeagueTypeGroup = {}));
var Continent;
(function (Continent) {
    Continent[Continent["None"] = 0] = "None";
    Continent[Continent["Africa"] = 1] = "Africa";
    Continent[Continent["America"] = 2] = "America";
    Continent[Continent["Asia"] = 3] = "Asia";
    Continent[Continent["Europe"] = 4] = "Europe";
    Continent[Continent["World"] = 5] = "World";
})(Continent || (Continent = {}));
var Platform;
(function (Platform) {
    Platform[Platform["All"] = -1] = "All";
    Platform[Platform["LegacyWeb"] = 0] = "LegacyWeb";
    Platform[Platform["LegacyIphone"] = 7] = "LegacyIphone";
    Platform[Platform["LegacyAndroid"] = 8] = "LegacyAndroid";
    Platform[Platform["LegacyIpad"] = 9] = "LegacyIpad";
    Platform[Platform["LegacyFacebook"] = 300] = "LegacyFacebook";
    Platform[Platform["LegacyVKontakte"] = 302] = "LegacyVKontakte";
    Platform[Platform["Browser"] = 10] = "Browser";
    Platform[Platform["WebDesktop"] = 11] = "WebDesktop";
    Platform[Platform["FacebookCanvas"] = 12] = "FacebookCanvas";
    Platform[Platform["WebPhone"] = 13] = "WebPhone";
    Platform[Platform["WebTablet"] = 14] = "WebTablet";
    Platform[Platform["iOS"] = 20] = "iOS";
    Platform[Platform["iPhone"] = 21] = "iPhone";
    Platform[Platform["iPad"] = 22] = "iPad";
    Platform[Platform["Android"] = 30] = "Android";
    Platform[Platform["AndroidPhone"] = 31] = "AndroidPhone";
    Platform[Platform["AndroidTablet"] = 32] = "AndroidTablet";
})(Platform || (Platform = {}));
var TacticOverall;
(function (TacticOverall) {
    TacticOverall[TacticOverall["LongBall"] = 0] = "LongBall";
    TacticOverall[TacticOverall["PassingGame"] = 1] = "PassingGame";
    TacticOverall[TacticOverall["PlayWide"] = 2] = "PlayWide";
    TacticOverall[TacticOverall["CounterAttack"] = 3] = "CounterAttack";
    TacticOverall[TacticOverall["ShootOnSight"] = 4] = "ShootOnSight";
})(TacticOverall || (TacticOverall = {}));
var TacticStyleOfPlay;
(function (TacticStyleOfPlay) {
    TacticStyleOfPlay[TacticStyleOfPlay["Fair"] = 0] = "Fair";
    TacticStyleOfPlay[TacticStyleOfPlay["Normal"] = 1] = "Normal";
    TacticStyleOfPlay[TacticStyleOfPlay["Hard"] = 2] = "Hard";
    TacticStyleOfPlay[TacticStyleOfPlay["Extreme"] = 3] = "Extreme";
})(TacticStyleOfPlay || (TacticStyleOfPlay = {}));
var TacticType;
(function (TacticType) {
    TacticType[TacticType["Tempo"] = 0] = "Tempo";
    TacticType[TacticType["Mentality"] = 1] = "Mentality";
    TacticType[TacticType["Overall"] = 2] = "Overall";
    TacticType[TacticType["Style"] = 3] = "Style";
    TacticType[TacticType["Pressing"] = 4] = "Pressing";
    TacticType[TacticType["Marking"] = 5] = "Marking";
    TacticType[TacticType["OffsideTrap"] = 6] = "OffsideTrap";
})(TacticType || (TacticType = {}));
var TacticLineAtt;
(function (TacticLineAtt) {
    TacticLineAtt[TacticLineAtt["FallBack"] = 0] = "FallBack";
    TacticLineAtt[TacticLineAtt["SupportMidfield"] = 1] = "SupportMidfield";
    TacticLineAtt[TacticLineAtt["AttackOnly"] = 2] = "AttackOnly";
})(TacticLineAtt || (TacticLineAtt = {}));
var TacticLineMid;
(function (TacticLineMid) {
    TacticLineMid[TacticLineMid["SupportDefense"] = 0] = "SupportDefense";
    TacticLineMid[TacticLineMid["Neutral"] = 1] = "Neutral";
    TacticLineMid[TacticLineMid["AttackingMidfielders"] = 2] = "AttackingMidfielders";
})(TacticLineMid || (TacticLineMid = {}));
var TacticLineDef;
(function (TacticLineDef) {
    TacticLineDef[TacticLineDef["StayBack"] = 0] = "StayBack";
    TacticLineDef[TacticLineDef["UpcomingBacks"] = 1] = "UpcomingBacks";
    TacticLineDef[TacticLineDef["SupportMidfield"] = 2] = "SupportMidfield";
})(TacticLineDef || (TacticLineDef = {}));
var TacticMentality;
(function (TacticMentality) {
    TacticMentality[TacticMentality["VeryDefensive"] = 0] = "VeryDefensive";
    TacticMentality[TacticMentality["Defensive"] = 20] = "Defensive";
    TacticMentality[TacticMentality["Neutral"] = 40] = "Neutral";
    TacticMentality[TacticMentality["Offensive"] = 60] = "Offensive";
    TacticMentality[TacticMentality["VeryOffensive"] = 80] = "VeryOffensive";
})(TacticMentality || (TacticMentality = {}));
var TacticMarking;
(function (TacticMarking) {
    TacticMarking[TacticMarking["Zonal"] = 0] = "Zonal";
    TacticMarking[TacticMarking["ManToMan"] = 1] = "ManToMan";
})(TacticMarking || (TacticMarking = {}));
var TacticOffsideTrap;
(function (TacticOffsideTrap) {
    TacticOffsideTrap[TacticOffsideTrap["Off"] = 0] = "Off";
    TacticOffsideTrap[TacticOffsideTrap["On"] = 1] = "On";
})(TacticOffsideTrap || (TacticOffsideTrap = {}));
var MatchEventType;
(function (MatchEventType) {
    MatchEventType[MatchEventType["Goal"] = 0] = "Goal";
    MatchEventType[MatchEventType["YellowCard"] = 1] = "YellowCard";
    MatchEventType[MatchEventType["RedCard"] = 2] = "RedCard";
    MatchEventType[MatchEventType["Injury"] = 3] = "Injury";
    MatchEventType[MatchEventType["SubstituteIn"] = 4] = "SubstituteIn";
    MatchEventType[MatchEventType["SubstituteOut"] = 5] = "SubstituteOut";
    MatchEventType[MatchEventType["Chance"] = 6] = "Chance";
    MatchEventType[MatchEventType["ChancePenalty"] = 7] = "ChancePenalty";
    MatchEventType[MatchEventType["ChanceCorner"] = 8] = "ChanceCorner";
    MatchEventType[MatchEventType["ChanceFreekick"] = 9] = "ChanceFreekick";
    MatchEventType[MatchEventType["GoalPenalty"] = 10] = "GoalPenalty";
    MatchEventType[MatchEventType["GoalCorner"] = 11] = "GoalCorner";
    MatchEventType[MatchEventType["GoalFreekick"] = 12] = "GoalFreekick";
    MatchEventType[MatchEventType["RedCardSecondYellow"] = 13] = "RedCardSecondYellow";
    MatchEventType[MatchEventType["StartStop"] = 14] = "StartStop";
    MatchEventType[MatchEventType["Intro"] = 15] = "Intro";
    MatchEventType[MatchEventType["PenaltyGoal"] = 16] = "PenaltyGoal";
    MatchEventType[MatchEventType["PenaltyMiss"] = 17] = "PenaltyMiss";
    MatchEventType[MatchEventType["Substitution"] = 18] = "Substitution";
    MatchEventType[MatchEventType["VarGoalApproved"] = 19] = "VarGoalApproved";
    MatchEventType[MatchEventType["VarGoalRejected"] = 20] = "VarGoalRejected";
    MatchEventType[MatchEventType["VarGoalToBeOverturned"] = 21] = "VarGoalToBeOverturned";
})(MatchEventType || (MatchEventType = {}));
var MatchPhase;
(function (MatchPhase) {
    MatchPhase[MatchPhase["PreMatch"] = 2] = "PreMatch";
    MatchPhase[MatchPhase["FirstHalf"] = 4] = "FirstHalf";
    MatchPhase[MatchPhase["HalfTime"] = 6] = "HalfTime";
    MatchPhase[MatchPhase["SecondHalf"] = 8] = "SecondHalf";
    MatchPhase[MatchPhase["ExtraTimeFirstHalf"] = 10] = "ExtraTimeFirstHalf";
    MatchPhase[MatchPhase["ExtraTimeSecondHalf"] = 12] = "ExtraTimeSecondHalf";
    MatchPhase[MatchPhase["Penalties"] = 14] = "Penalties";
    MatchPhase[MatchPhase["AfterMatch"] = 16] = "AfterMatch";
})(MatchPhase || (MatchPhase = {}));
var RefereeStrictness;
(function (RefereeStrictness) {
    RefereeStrictness[RefereeStrictness["VeryStrict"] = 1] = "VeryStrict";
    RefereeStrictness[RefereeStrictness["Strict"] = 2] = "Strict";
    RefereeStrictness[RefereeStrictness["Average"] = 3] = "Average";
    RefereeStrictness[RefereeStrictness["Lenient"] = 4] = "Lenient";
    RefereeStrictness[RefereeStrictness["VeryLenient"] = 5] = "VeryLenient";
})(RefereeStrictness || (RefereeStrictness = {}));
var BoardMood;
(function (BoardMood) {
    BoardMood[BoardMood["Happy"] = 0] = "Happy";
    BoardMood[BoardMood["Satisfied"] = 1] = "Satisfied";
    BoardMood[BoardMood["Angry"] = 2] = "Angry";
    BoardMood[BoardMood["Hopeful"] = 3] = "Hopeful";
})(BoardMood || (BoardMood = {}));
var CupRoundName;
(function (CupRoundName) {
    CupRoundName[CupRoundName["Preperation"] = 0] = "Preperation";
    CupRoundName[CupRoundName["FirstRound"] = 1] = "FirstRound";
    CupRoundName[CupRoundName["SecondRound"] = 2] = "SecondRound";
    CupRoundName[CupRoundName["QuarterFinal"] = 3] = "QuarterFinal";
    CupRoundName[CupRoundName["SemiFinal"] = 4] = "SemiFinal";
    CupRoundName[CupRoundName["Final"] = 5] = "Final";
})(CupRoundName || (CupRoundName = {}));
var CupRoundType;
(function (CupRoundType) {
    CupRoundType[CupRoundType["Preliminaries"] = -1] = "Preliminaries";
    CupRoundType[CupRoundType["Unknown"] = 0] = "Unknown";
    CupRoundType[CupRoundType["Final"] = 1] = "Final";
    CupRoundType[CupRoundType["SemiFinal"] = 2] = "SemiFinal";
    CupRoundType[CupRoundType["QuarterFinal"] = 3] = "QuarterFinal";
    CupRoundType[CupRoundType["RoundOf16"] = 4] = "RoundOf16";
    CupRoundType[CupRoundType["RoundOf32"] = 5] = "RoundOf32";
    CupRoundType[CupRoundType["RoundOf64"] = 6] = "RoundOf64";
    CupRoundType[CupRoundType["RoundOf128"] = 7] = "RoundOf128";
})(CupRoundType || (CupRoundType = {}));
var MoneyTransferType;
(function (MoneyTransferType) {
    MoneyTransferType[MoneyTransferType["Withdraw"] = 0] = "Withdraw";
    MoneyTransferType[MoneyTransferType["Deposit"] = 1] = "Deposit";
})(MoneyTransferType || (MoneyTransferType = {}));
var SponsorSide;
(function (SponsorSide) {
    SponsorSide[SponsorSide["None"] = 0] = "None";
    SponsorSide[SponsorSide["North"] = 1] = "North";
    SponsorSide[SponsorSide["East"] = 2] = "East";
    SponsorSide[SponsorSide["South"] = 3] = "South";
    SponsorSide[SponsorSide["West"] = 4] = "West";
})(SponsorSide || (SponsorSide = {}));
var NewspaperArticleType;
(function (NewspaperArticleType) {
    NewspaperArticleType[NewspaperArticleType["TextArticle"] = 0] = "TextArticle";
    NewspaperArticleType[NewspaperArticleType["Promotion"] = 1] = "Promotion";
    NewspaperArticleType[NewspaperArticleType["Squad"] = 2] = "Squad";
    NewspaperArticleType[NewspaperArticleType["Schedule"] = 3] = "Schedule";
    NewspaperArticleType[NewspaperArticleType["Results"] = 4] = "Results";
    NewspaperArticleType[NewspaperArticleType["League"] = 5] = "League";
    NewspaperArticleType[NewspaperArticleType["Moderator"] = 6] = "Moderator";
    NewspaperArticleType[NewspaperArticleType["Weather"] = 7] = "Weather";
    NewspaperArticleType[NewspaperArticleType["Photo"] = 8] = "Photo";
    NewspaperArticleType[NewspaperArticleType["ManagerComment"] = 9] = "ManagerComment";
})(NewspaperArticleType || (NewspaperArticleType = {}));
var MenuHeaderType;
(function (MenuHeaderType) {
    MenuHeaderType[MenuHeaderType["Home"] = 0] = "Home";
    MenuHeaderType[MenuHeaderType["Team"] = 1] = "Team";
    MenuHeaderType[MenuHeaderType["TrainingGround"] = 2] = "TrainingGround";
    MenuHeaderType[MenuHeaderType["Club"] = 3] = "Club";
    MenuHeaderType[MenuHeaderType["Staff"] = 4] = "Staff";
    MenuHeaderType[MenuHeaderType["Matches"] = 5] = "Matches";
    MenuHeaderType[MenuHeaderType["Community"] = 6] = "Community";
})(MenuHeaderType || (MenuHeaderType = {}));
var MenuItemType;
(function (MenuItemType) {
    MenuItemType[MenuItemType["Squad"] = 0] = "Squad";
    MenuItemType[MenuItemType["Lineup"] = 1] = "Lineup";
    MenuItemType[MenuItemType["Tactics"] = 2] = "Tactics";
    MenuItemType[MenuItemType["Specialists"] = 3] = "Specialists";
    MenuItemType[MenuItemType["TransferList"] = 4] = "TransferList";
    MenuItemType[MenuItemType["Offers"] = 5] = "Offers";
    MenuItemType[MenuItemType["Training"] = 6] = "Training";
    MenuItemType[MenuItemType["Friendlies"] = 7] = "Friendlies";
    MenuItemType[MenuItemType["SecretTraining"] = 8] = "SecretTraining";
    MenuItemType[MenuItemType["TrainingCamp"] = 9] = "TrainingCamp";
    MenuItemType[MenuItemType["Fixtures"] = 10] = "Fixtures";
    MenuItemType[MenuItemType["Results"] = 11] = "Results";
    MenuItemType[MenuItemType["LeagueTable"] = 12] = "LeagueTable";
    MenuItemType[MenuItemType["MatchCalendar"] = 13] = "MatchCalendar";
    MenuItemType[MenuItemType["Cup"] = 14] = "Cup";
    MenuItemType[MenuItemType["NewsPaper"] = 15] = "NewsPaper";
    MenuItemType[MenuItemType["PlayerRatings"] = 16] = "PlayerRatings";
    MenuItemType[MenuItemType["Stadium"] = 17] = "Stadium";
    MenuItemType[MenuItemType["Sponsors"] = 18] = "Sponsors";
    MenuItemType[MenuItemType["Board"] = 19] = "Board";
    MenuItemType[MenuItemType["Finances"] = 20] = "Finances";
    MenuItemType[MenuItemType["Scout"] = 21] = "Scout";
    MenuItemType[MenuItemType["Spy"] = 22] = "Spy";
    MenuItemType[MenuItemType["Doctor"] = 23] = "Doctor";
    MenuItemType[MenuItemType["Lawyer"] = 24] = "Lawyer";
    MenuItemType[MenuItemType["Friends"] = 25] = "Friends";
    MenuItemType[MenuItemType["Ranking"] = 26] = "Ranking";
    MenuItemType[MenuItemType["Forums"] = 27] = "Forums";
    MenuItemType[MenuItemType["Crews"] = 28] = "Crews";
    MenuItemType[MenuItemType["LeagueOverview"] = 29] = "LeagueOverview";
    MenuItemType[MenuItemType["LeagueStatistics"] = 30] = "LeagueStatistics";
    MenuItemType[MenuItemType["BusinessClub"] = 31] = "BusinessClub";
    MenuItemType[MenuItemType["ActiveLeagues"] = 32] = "ActiveLeagues";
    MenuItemType[MenuItemType["SimulationStatus"] = 33] = "SimulationStatus";
    MenuItemType[MenuItemType["ManagerList"] = 34] = "ManagerList";
})(MenuItemType || (MenuItemType = {}));
var BoardMember;
(function (BoardMember) {
    BoardMember[BoardMember["None"] = 0] = "None";
    BoardMember[BoardMember["Advisor"] = 1] = "Advisor";
    BoardMember[BoardMember["Chairman"] = 2] = "Chairman";
    BoardMember[BoardMember["Analist"] = 3] = "Analist";
})(BoardMember || (BoardMember = {}));
var MessageContentType;
(function (MessageContentType) {
    MessageContentType[MessageContentType["Text"] = 0] = "Text";
    MessageContentType[MessageContentType["Promotion"] = 1] = "Promotion";
})(MessageContentType || (MessageContentType = {}));
var CountdownTimerType;
(function (CountdownTimerType) {
    CountdownTimerType[CountdownTimerType["Unknown"] = 0] = "Unknown";
    CountdownTimerType[CountdownTimerType["ForwardTraining"] = 1] = "ForwardTraining";
    CountdownTimerType[CountdownTimerType["MidfielderTraining"] = 2] = "MidfielderTraining";
    CountdownTimerType[CountdownTimerType["DefenderTraining"] = 3] = "DefenderTraining";
    CountdownTimerType[CountdownTimerType["GoalKeeperTraining"] = 4] = "GoalKeeperTraining";
    CountdownTimerType[CountdownTimerType["StadiumCapacityExpanding"] = 5] = "StadiumCapacityExpanding";
    CountdownTimerType[CountdownTimerType["StadiumPitchExpanding"] = 6] = "StadiumPitchExpanding";
    CountdownTimerType[CountdownTimerType["StadiumTrainingExpanding"] = 7] = "StadiumTrainingExpanding";
    CountdownTimerType[CountdownTimerType["SpySpying"] = 8] = "SpySpying";
    CountdownTimerType[CountdownTimerType["Scout"] = 9] = "Scout";
    CountdownTimerType[CountdownTimerType["DoctorTreating"] = 10] = "DoctorTreating";
    CountdownTimerType[CountdownTimerType["LawyerAppealing"] = 11] = "LawyerAppealing";
    CountdownTimerType[CountdownTimerType["ScoutDeadlineCounting"] = 12] = "ScoutDeadlineCounting";
    CountdownTimerType[CountdownTimerType["TemporaryOfferCounting"] = 13] = "TemporaryOfferCounting";
    CountdownTimerType[CountdownTimerType["NextMatch"] = 14] = "NextMatch";
    CountdownTimerType[CountdownTimerType["BcBonusCounting"] = 15] = "BcBonusCounting";
    CountdownTimerType[CountdownTimerType["NextRound"] = 16] = "NextRound";
})(CountdownTimerType || (CountdownTimerType = {}));
var MatchSimulationState;
(function (MatchSimulationState) {
    MatchSimulationState[MatchSimulationState["Upcoming"] = 0] = "Upcoming";
    MatchSimulationState[MatchSimulationState["Finished"] = 1] = "Finished";
    MatchSimulationState[MatchSimulationState["InProgress"] = 2] = "InProgress";
    MatchSimulationState[MatchSimulationState["Delayed"] = 3] = "Delayed";
    MatchSimulationState[MatchSimulationState["Soon"] = 4] = "Soon";
})(MatchSimulationState || (MatchSimulationState = {}));
var LeagueSettingType;
(function (LeagueSettingType) {
    LeagueSettingType[LeagueSettingType["Unknown"] = -1] = "Unknown";
    LeagueSettingType[LeagueSettingType["GoalType"] = 0] = "GoalType";
    LeagueSettingType[LeagueSettingType["Budget"] = 1] = "Budget";
    LeagueSettingType[LeagueSettingType["TeamCount"] = 2] = "TeamCount";
    LeagueSettingType[LeagueSettingType["Closed"] = 3] = "Closed";
    LeagueSettingType[LeagueSettingType["Cup"] = 4] = "Cup";
    LeagueSettingType[LeagueSettingType["IsTrainingCampAllowed"] = 5] = "IsTrainingCampAllowed";
    LeagueSettingType[LeagueSettingType["IsSecretTrainingAllowed"] = 6] = "IsSecretTrainingAllowed";
    LeagueSettingType[LeagueSettingType["BossCoinTransfers"] = 7] = "BossCoinTransfers";
    LeagueSettingType[LeagueSettingType["Transfers"] = 8] = "Transfers";
    LeagueSettingType[LeagueSettingType["PreparationDays"] = 9] = "PreparationDays";
    LeagueSettingType[LeagueSettingType["TeamNr"] = 10] = "TeamNr";
    LeagueSettingType[LeagueSettingType["Discontinue"] = 11] = "Discontinue";
    LeagueSettingType[LeagueSettingType["LeagueTypeId"] = 12] = "LeagueTypeId";
    LeagueSettingType[LeagueSettingType["HasCrewCup"] = 13] = "HasCrewCup";
    LeagueSettingType[LeagueSettingType["BoostTimers"] = 14] = "BoostTimers";
})(LeagueSettingType || (LeagueSettingType = {}));
var TutorialPage;
(function (TutorialPage) {
    TutorialPage[TutorialPage["ChooseLeague"] = 0] = "ChooseLeague";
    TutorialPage[TutorialPage["ChooseTeam"] = 1] = "ChooseTeam";
    TutorialPage[TutorialPage["SignContract"] = 2] = "SignContract";
})(TutorialPage || (TutorialPage = {}));
var OfferStatus;
(function (OfferStatus) {
    OfferStatus[OfferStatus["Unknown"] = 0] = "Unknown";
    OfferStatus[OfferStatus["Created"] = 1] = "Created";
    OfferStatus[OfferStatus["CounterOfferSent"] = 2] = "CounterOfferSent";
    OfferStatus[OfferStatus["Accepted"] = 3] = "Accepted";
    OfferStatus[OfferStatus["Withdrawn"] = 4] = "Withdrawn";
    OfferStatus[OfferStatus["Rejected"] = 5] = "Rejected";
})(OfferStatus || (OfferStatus = {}));
var PaymentSystem;
(function (PaymentSystem) {
    PaymentSystem[PaymentSystem["Allopass"] = 1] = "Allopass";
    PaymentSystem[PaymentSystem["MobileMoney"] = 2] = "MobileMoney";
    PaymentSystem[PaymentSystem["Zong"] = 3] = "Zong";
    PaymentSystem[PaymentSystem["PayByMe"] = 4] = "PayByMe";
    PaymentSystem[PaymentSystem["Actel"] = 5] = "Actel";
    PaymentSystem[PaymentSystem["Adyen"] = 7] = "Adyen";
    PaymentSystem[PaymentSystem["OneCard"] = 8] = "OneCard";
    PaymentSystem[PaymentSystem["PayPal"] = 10] = "PayPal";
    PaymentSystem[PaymentSystem["TargetPay"] = 12] = "TargetPay";
    PaymentSystem[PaymentSystem["Facebook"] = 13] = "Facebook";
    PaymentSystem[PaymentSystem["Bill4Net"] = 14] = "Bill4Net";
    PaymentSystem[PaymentSystem["CashU"] = 15] = "CashU";
    PaymentSystem[PaymentSystem["Centili"] = 20] = "Centili";
    PaymentSystem[PaymentSystem["Fortumo"] = 21] = "Fortumo";
    PaymentSystem[PaymentSystem["Ideal"] = 25] = "Ideal";
    PaymentSystem[PaymentSystem["TTNet"] = 26] = "TTNet";
    PaymentSystem[PaymentSystem["Test"] = 99] = "Test";
})(PaymentSystem || (PaymentSystem = {}));
var ProductType;
(function (ProductType) {
    ProductType[ProductType["BC"] = 4] = "BC";
})(ProductType || (ProductType = {}));
var ProductSize;
(function (ProductSize) {
    ProductSize["Small"] = "Small";
    ProductSize["Medium"] = "Medium";
    ProductSize["Large"] = "Large";
})(ProductSize || (ProductSize = {}));
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["BCDeals"] = "BCDeals";
    ProductCategory["Free"] = "Free";
    ProductCategory["Special"] = "Special";
    ProductCategory["Temporary"] = "Temporary";
    ProductCategory["Context"] = "Context";
})(ProductCategory || (ProductCategory = {}));
var ProductLabel;
(function (ProductLabel) {
    ProductLabel[ProductLabel["None"] = 0] = "None";
    ProductLabel[ProductLabel["New"] = 1] = "New";
    ProductLabel[ProductLabel["Sale"] = 2] = "Sale";
})(ProductLabel || (ProductLabel = {}));
var ProductColor;
(function (ProductColor) {
    ProductColor["Blue"] = "Blue";
    ProductColor["Green"] = "Green";
    ProductColor["Orange"] = "Orange";
})(ProductColor || (ProductColor = {}));
var ShopItemType;
(function (ShopItemType) {
    ShopItemType["WatchVideo"] = "WatchVideo";
    ShopItemType["ClaimDailyReward"] = "ClaimDailyReward";
})(ShopItemType || (ShopItemType = {}));
var RestrictionType;
(function (RestrictionType) {
    RestrictionType[RestrictionType["None"] = 0] = "None";
    RestrictionType[RestrictionType["MaxAmount"] = 1] = "MaxAmount";
    RestrictionType[RestrictionType["EndTime"] = 2] = "EndTime";
    RestrictionType[RestrictionType["TimeAfterSignup"] = 3] = "TimeAfterSignup";
})(RestrictionType || (RestrictionType = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["Macro"] = 0] = "Macro";
    PaymentType[PaymentType["Sms"] = 1] = "Sms";
    PaymentType[PaymentType["Ivr"] = 2] = "Ivr";
})(PaymentType || (PaymentType = {}));
var TutorialStep;
(function (TutorialStep) {
    TutorialStep[TutorialStep["NotInTutorial"] = 0] = "NotInTutorial";
    TutorialStep[TutorialStep["ChooseTeamChooseLeagueIntro"] = 10] = "ChooseTeamChooseLeagueIntro";
    TutorialStep[TutorialStep["ChooseTeamChooseTeamIntro"] = 11] = "ChooseTeamChooseTeamIntro";
    TutorialStep[TutorialStep["ChooseTeamChooseSignContractIntro"] = 12] = "ChooseTeamChooseSignContractIntro";
    TutorialStep[TutorialStep["ChooseTeamChooseSignContract"] = 13] = "ChooseTeamChooseSignContract";
    TutorialStep[TutorialStep["ChooseTeamChooseSignContractOutro"] = 14] = "ChooseTeamChooseSignContractOutro";
    TutorialStep[TutorialStep["LineupIntro"] = 20] = "LineupIntro";
    TutorialStep[TutorialStep["LineupOpenFormations"] = 21] = "LineupOpenFormations";
    TutorialStep[TutorialStep["LineupSelectFormation"] = 22] = "LineupSelectFormation";
    TutorialStep[TutorialStep["LineupFormationOutro"] = 23] = "LineupFormationOutro";
    TutorialStep[TutorialStep["LineupDragPlayer"] = 24] = "LineupDragPlayer";
    TutorialStep[TutorialStep["LineupDropPlayer"] = 25] = "LineupDropPlayer";
    TutorialStep[TutorialStep["LineupSelectPlayer"] = 26] = "LineupSelectPlayer";
    TutorialStep[TutorialStep["LineupOutro"] = 27] = "LineupOutro";
    TutorialStep[TutorialStep["MenuTactics"] = 30] = "MenuTactics";
    TutorialStep[TutorialStep["TacticsIntro"] = 31] = "TacticsIntro";
    TutorialStep[TutorialStep["TacticsChange"] = 32] = "TacticsChange";
    TutorialStep[TutorialStep["TacticsOutro"] = 33] = "TacticsOutro";
    TutorialStep[TutorialStep["MenuFriendlies"] = 40] = "MenuFriendlies";
    TutorialStep[TutorialStep["FriendliesIntro"] = 41] = "FriendliesIntro";
    TutorialStep[TutorialStep["FriendliesClaimBossCoins"] = 42] = "FriendliesClaimBossCoins";
    TutorialStep[TutorialStep["FriendliesSelectOpponent"] = 43] = "FriendliesSelectOpponent";
    TutorialStep[TutorialStep["FriendliesConfirm"] = 44] = "FriendliesConfirm";
    TutorialStep[TutorialStep["FriendliesCheckImprovement"] = 45] = "FriendliesCheckImprovement";
    TutorialStep[TutorialStep["FriendliesOutro"] = 46] = "FriendliesOutro";
    TutorialStep[TutorialStep["MenuTraining"] = 50] = "MenuTraining";
    TutorialStep[TutorialStep["TrainingIntro"] = 51] = "TrainingIntro";
    TutorialStep[TutorialStep["TrainingOpenModal"] = 52] = "TrainingOpenModal";
    TutorialStep[TutorialStep["TrainingSelectPlayer"] = 53] = "TrainingSelectPlayer";
    TutorialStep[TutorialStep["TrainingClaimBossCoins"] = 54] = "TrainingClaimBossCoins";
    TutorialStep[TutorialStep["TrainingBoost"] = 55] = "TrainingBoost";
    TutorialStep[TutorialStep["TrainingConfirmBoost"] = 56] = "TrainingConfirmBoost";
    TutorialStep[TutorialStep["TrainingOutro"] = 57] = "TrainingOutro";
    TutorialStep[TutorialStep["TrainingGoHome"] = 58] = "TrainingGoHome";
    TutorialStep[TutorialStep["HomeIntro"] = 80] = "HomeIntro";
    TutorialStep[TutorialStep["HomeTimer"] = 81] = "HomeTimer";
    TutorialStep[TutorialStep["HomeOpenNotifications"] = 82] = "HomeOpenNotifications";
    TutorialStep[TutorialStep["HomeCheckNotifications"] = 83] = "HomeCheckNotifications";
    TutorialStep[TutorialStep["Reward"] = 90] = "Reward";
    TutorialStep[TutorialStep["End"] = 100] = "End";
})(TutorialStep || (TutorialStep = {}));
var LineupViewType;
(function (LineupViewType) {
    LineupViewType[LineupViewType["Image"] = 0] = "Image";
    LineupViewType[LineupViewType["Fitness"] = 1] = "Fitness";
    LineupViewType[LineupViewType["Rating"] = 2] = "Rating";
    LineupViewType[LineupViewType["Matches"] = 3] = "Matches";
})(LineupViewType || (LineupViewType = {}));
var LineupAmountAndType;
(function (LineupAmountAndType) {
    LineupAmountAndType[LineupAmountAndType["OneTypeA"] = 0] = "OneTypeA";
    LineupAmountAndType[LineupAmountAndType["TwoTypeA"] = 1] = "TwoTypeA";
    LineupAmountAndType[LineupAmountAndType["TwoTypeB"] = 2] = "TwoTypeB";
    LineupAmountAndType[LineupAmountAndType["ThreeTypeA"] = 3] = "ThreeTypeA";
    LineupAmountAndType[LineupAmountAndType["ThreeTypeB"] = 4] = "ThreeTypeB";
    LineupAmountAndType[LineupAmountAndType["ThreeTypeC"] = 5] = "ThreeTypeC";
    LineupAmountAndType[LineupAmountAndType["FourTypeA"] = 6] = "FourTypeA";
    LineupAmountAndType[LineupAmountAndType["FourTypeB"] = 7] = "FourTypeB";
    LineupAmountAndType[LineupAmountAndType["FiveTypeA"] = 8] = "FiveTypeA";
    LineupAmountAndType[LineupAmountAndType["FiveTypeB"] = 9] = "FiveTypeB";
    LineupAmountAndType[LineupAmountAndType["SixTypeA"] = 10] = "SixTypeA";
})(LineupAmountAndType || (LineupAmountAndType = {}));
var ProcessStatus;
(function (ProcessStatus) {
    ProcessStatus[ProcessStatus["NoAction"] = 0] = "NoAction";
    ProcessStatus[ProcessStatus["Success"] = 1] = "Success";
    ProcessStatus[ProcessStatus["Processing"] = 2] = "Processing";
    ProcessStatus[ProcessStatus["Failed"] = 3] = "Failed";
})(ProcessStatus || (ProcessStatus = {}));
var PaymentCheckoutResult;
(function (PaymentCheckoutResult) {
    PaymentCheckoutResult[PaymentCheckoutResult["OrderCreationFailed"] = 0] = "OrderCreationFailed";
    PaymentCheckoutResult[PaymentCheckoutResult["Success"] = 1] = "Success";
    PaymentCheckoutResult[PaymentCheckoutResult["InvalidProduct"] = 2] = "InvalidProduct";
    PaymentCheckoutResult[PaymentCheckoutResult["PaymentCancelled"] = 3] = "PaymentCancelled";
})(PaymentCheckoutResult || (PaymentCheckoutResult = {}));
var PaymentEnvironmentLoadResult;
(function (PaymentEnvironmentLoadResult) {
    PaymentEnvironmentLoadResult[PaymentEnvironmentLoadResult["Failed"] = 0] = "Failed";
    PaymentEnvironmentLoadResult[PaymentEnvironmentLoadResult["Complete"] = 1] = "Complete";
})(PaymentEnvironmentLoadResult || (PaymentEnvironmentLoadResult = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Requested"] = 0] = "Requested";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Failed"] = 2] = "Failed";
    OrderStatus[OrderStatus["Reversed"] = 3] = "Reversed";
    OrderStatus[OrderStatus["Completed"] = 4] = "Completed";
})(OrderStatus || (OrderStatus = {}));
var InviteType;
(function (InviteType) {
    InviteType[InviteType["Login"] = 0] = "Login";
    InviteType[InviteType["FacebookId"] = 1] = "FacebookId";
    InviteType[InviteType["Email"] = 2] = "Email";
})(InviteType || (InviteType = {}));
var InviteStatus;
(function (InviteStatus) {
    InviteStatus[InviteStatus["Sent"] = 0] = "Sent";
    InviteStatus[InviteStatus["Expired"] = 1] = "Expired";
    InviteStatus[InviteStatus["Accepted"] = 2] = "Accepted";
    InviteStatus[InviteStatus["Denied"] = 3] = "Denied";
})(InviteStatus || (InviteStatus = {}));
var RewardType;
(function (RewardType) {
    RewardType[RewardType["Inviter"] = 0] = "Inviter";
    RewardType[RewardType["Signup"] = 1] = "Signup";
    RewardType[RewardType["TutorialFriendly"] = 2] = "TutorialFriendly";
    RewardType[RewardType["TutorialTraining"] = 3] = "TutorialTraining";
    RewardType[RewardType["TutorialFinish"] = 4] = "TutorialFinish";
})(RewardType || (RewardType = {}));
var ActionType;
(function (ActionType) {
    ActionType[ActionType["WatchVideo"] = 0] = "WatchVideo";
    ActionType[ActionType["ReachAchievementThreshold"] = 1] = "ReachAchievementThreshold";
    ActionType[ActionType["InvitedForVipLeagueEvent"] = 2] = "InvitedForVipLeagueEvent";
})(ActionType || (ActionType = {}));
var RewardStatus;
(function (RewardStatus) {
    RewardStatus[RewardStatus["Unclaimed"] = 0] = "Unclaimed";
    RewardStatus[RewardStatus["Claimed"] = 1] = "Claimed";
})(RewardStatus || (RewardStatus = {}));
var Gender;
(function (Gender) {
    Gender[Gender["M"] = 0] = "M";
    Gender[Gender["F"] = 1] = "F";
})(Gender || (Gender = {}));
var IncentiveSystem;
(function (IncentiveSystem) {
    IncentiveSystem[IncentiveSystem["Fyber"] = 0] = "Fyber";
    IncentiveSystem[IncentiveSystem["SuperSonicAds"] = 1] = "SuperSonicAds";
    IncentiveSystem[IncentiveSystem["SuperRewards"] = 2] = "SuperRewards";
    IncentiveSystem[IncentiveSystem["TokenAds"] = 3] = "TokenAds";
    IncentiveSystem[IncentiveSystem["VariousOffers"] = 4] = "VariousOffers";
    IncentiveSystem[IncentiveSystem["Matomy"] = 5] = "Matomy";
    IncentiveSystem[IncentiveSystem["E2Ma"] = 6] = "E2Ma";
    IncentiveSystem[IncentiveSystem["TrialPay"] = 7] = "TrialPay";
    IncentiveSystem[IncentiveSystem["Tapjoy"] = 8] = "Tapjoy";
    IncentiveSystem[IncentiveSystem["BrandConnect"] = 9] = "BrandConnect";
    IncentiveSystem[IncentiveSystem["Julius"] = 10] = "Julius";
    IncentiveSystem[IncentiveSystem["SponsorPay"] = 11] = "SponsorPay";
    IncentiveSystem[IncentiveSystem["MNectar"] = 12] = "MNectar";
    IncentiveSystem[IncentiveSystem["PersonaLy"] = 13] = "PersonaLy";
    IncentiveSystem[IncentiveSystem["SuperSonicAdsFacebook"] = 14] = "SuperSonicAdsFacebook";
    IncentiveSystem[IncentiveSystem["FyberFacebook"] = 15] = "FyberFacebook";
    IncentiveSystem[IncentiveSystem["AppLixir"] = 16] = "AppLixir";
    IncentiveSystem[IncentiveSystem["None"] = 999] = "None";
})(IncentiveSystem || (IncentiveSystem = {}));
var IncentiveType;
(function (IncentiveType) {
    IncentiveType[IncentiveType["OfferWall"] = 0] = "OfferWall";
    IncentiveType[IncentiveType["Video"] = 1] = "Video";
})(IncentiveType || (IncentiveType = {}));
var RedirectionFlow;
(function (RedirectionFlow) {
    RedirectionFlow[RedirectionFlow["AccountState"] = 0] = "AccountState";
    RedirectionFlow[RedirectionFlow["AccountSelect"] = 1] = "AccountSelect";
    RedirectionFlow[RedirectionFlow["NotLoggedIn"] = 2] = "NotLoggedIn";
    RedirectionFlow[RedirectionFlow["Reset"] = 3] = "Reset";
    RedirectionFlow[RedirectionFlow["CreateCrewLeague"] = 4] = "CreateCrewLeague";
    RedirectionFlow[RedirectionFlow["ServerDown"] = 5] = "ServerDown";
})(RedirectionFlow || (RedirectionFlow = {}));
var CustomWebApiException;
(function (CustomWebApiException) {
    CustomWebApiException[CustomWebApiException["BossCoinResultNotEnoughCoins"] = 0] = "BossCoinResultNotEnoughCoins";
    CustomWebApiException[CustomWebApiException["AccountNotActivated"] = 1] = "AccountNotActivated";
})(CustomWebApiException || (CustomWebApiException = {}));
var InvalidGrantType;
(function (InvalidGrantType) {
    InvalidGrantType[InvalidGrantType["LoginIncorrect"] = 0] = "LoginIncorrect";
    InvalidGrantType[InvalidGrantType["Locked"] = 1] = "Locked";
    InvalidGrantType[InvalidGrantType["IPBanned"] = 2] = "IPBanned";
})(InvalidGrantType || (InvalidGrantType = {}));
var LockReason;
(function (LockReason) {
    LockReason[LockReason["LockedMultiAccountPassword"] = 0] = "LockedMultiAccountPassword";
    LockReason[LockReason["LockedMultiAccountMachineId"] = 1] = "LockedMultiAccountMachineId";
    LockReason[LockReason["LockedIllegalTransfers"] = 2] = "LockedIllegalTransfers";
    LockReason[LockReason["LockedMultiAccount"] = 3] = "LockedMultiAccount";
    LockReason[LockReason["LockedForumSpamSwear"] = 4] = "LockedForumSpamSwear";
    LockReason[LockReason["LockedOther"] = 5] = "LockedOther";
    LockReason[LockReason["UnlockedDoubtful"] = 6] = "UnlockedDoubtful";
    LockReason[LockReason["UnlockedMistake"] = 7] = "UnlockedMistake";
    LockReason[LockReason["UnlockedAdmittedGuilt"] = 8] = "UnlockedAdmittedGuilt";
    LockReason[LockReason["UnlockedBoughtTickets"] = 9] = "UnlockedBoughtTickets";
    LockReason[LockReason["UnlockedOther"] = 10] = "UnlockedOther";
    LockReason[LockReason["AccountDeleted"] = 11] = "AccountDeleted";
})(LockReason || (LockReason = {}));
var EntryRequestStatus;
(function (EntryRequestStatus) {
    EntryRequestStatus[EntryRequestStatus["Rejected"] = 0] = "Rejected";
    EntryRequestStatus[EntryRequestStatus["Accepted"] = 1] = "Accepted";
    EntryRequestStatus[EntryRequestStatus["Requested"] = 2] = "Requested";
})(EntryRequestStatus || (EntryRequestStatus = {}));
var ExternalType;
(function (ExternalType) {
    ExternalType[ExternalType["Facebook"] = 0] = "Facebook";
    ExternalType[ExternalType["GooglePlus"] = 1] = "GooglePlus";
})(ExternalType || (ExternalType = {}));
var IncentiveSpot;
(function (IncentiveSpot) {
    IncentiveSpot[IncentiveSpot["One"] = 0] = "One";
    IncentiveSpot[IncentiveSpot["Two"] = 1] = "Two";
    IncentiveSpot[IncentiveSpot["Three"] = 2] = "Three";
})(IncentiveSpot || (IncentiveSpot = {}));
var CrewRecruitmentStatus;
(function (CrewRecruitmentStatus) {
    CrewRecruitmentStatus[CrewRecruitmentStatus["Open"] = 0] = "Open";
    CrewRecruitmentStatus[CrewRecruitmentStatus["RequestAccess"] = 1] = "RequestAccess";
    CrewRecruitmentStatus[CrewRecruitmentStatus["InviteOnly"] = 2] = "InviteOnly";
})(CrewRecruitmentStatus || (CrewRecruitmentStatus = {}));
var CrewMemberStatus;
(function (CrewMemberStatus) {
    CrewMemberStatus[CrewMemberStatus["Member"] = 0] = "Member";
    CrewMemberStatus[CrewMemberStatus["Vp"] = 1] = "Vp";
    CrewMemberStatus[CrewMemberStatus["President"] = 2] = "President";
})(CrewMemberStatus || (CrewMemberStatus = {}));
var CrewInviteStatus;
(function (CrewInviteStatus) {
    CrewInviteStatus[CrewInviteStatus["Pending"] = 0] = "Pending";
    CrewInviteStatus[CrewInviteStatus["Accepted"] = 1] = "Accepted";
    CrewInviteStatus[CrewInviteStatus["Declined"] = 2] = "Declined";
})(CrewInviteStatus || (CrewInviteStatus = {}));
var CrewRequestStatus;
(function (CrewRequestStatus) {
    CrewRequestStatus[CrewRequestStatus["Pending"] = 0] = "Pending";
    CrewRequestStatus[CrewRequestStatus["Accepted"] = 1] = "Accepted";
    CrewRequestStatus[CrewRequestStatus["Declined"] = 2] = "Declined";
})(CrewRequestStatus || (CrewRequestStatus = {}));
var CrewBattleStatus;
(function (CrewBattleStatus) {
    CrewBattleStatus[CrewBattleStatus["InProgress"] = 0] = "InProgress";
    CrewBattleStatus[CrewBattleStatus["Finished"] = 1] = "Finished";
})(CrewBattleStatus || (CrewBattleStatus = {}));
var CrewBattleCreationType;
(function (CrewBattleCreationType) {
    CrewBattleCreationType[CrewBattleCreationType["Join"] = 0] = "Join";
    CrewBattleCreationType[CrewBattleCreationType["Challenge"] = 1] = "Challenge";
    CrewBattleCreationType[CrewBattleCreationType["Hosted"] = 2] = "Hosted";
})(CrewBattleCreationType || (CrewBattleCreationType = {}));
var RankingType;
(function (RankingType) {
    RankingType[RankingType["User"] = 0] = "User";
    RankingType[RankingType["Country"] = 1] = "Country";
    RankingType[RankingType["World"] = 2] = "World";
})(RankingType || (RankingType = {}));
var UserCrewMembershipStatus;
(function (UserCrewMembershipStatus) {
    UserCrewMembershipStatus[UserCrewMembershipStatus["None"] = 0] = "None";
    UserCrewMembershipStatus[UserCrewMembershipStatus["Pending"] = 1] = "Pending";
    UserCrewMembershipStatus[UserCrewMembershipStatus["InYourCrew"] = 2] = "InYourCrew";
    UserCrewMembershipStatus[UserCrewMembershipStatus["HasCrew"] = 3] = "HasCrew";
})(UserCrewMembershipStatus || (UserCrewMembershipStatus = {}));
var SurfacingType;
(function (SurfacingType) {
    SurfacingType[SurfacingType["Default"] = 0] = "Default";
    SurfacingType[SurfacingType["Doctor"] = 1] = "Doctor";
    SurfacingType[SurfacingType["Lawyer"] = 2] = "Lawyer";
    SurfacingType[SurfacingType["Scout"] = 3] = "Scout";
    SurfacingType[SurfacingType["Career"] = 4] = "Career";
    SurfacingType[SurfacingType["Spy"] = 5] = "Spy";
    SurfacingType[SurfacingType["BusinessClub"] = 6] = "BusinessClub";
    SurfacingType[SurfacingType["Forums"] = 7] = "Forums";
    SurfacingType[SurfacingType["TrainingCampFirst"] = 8] = "TrainingCampFirst";
    SurfacingType[SurfacingType["TrainingCampInFirstThirdOfSeason"] = 9] = "TrainingCampInFirstThirdOfSeason";
    SurfacingType[SurfacingType["TrainingCampInSecondThirdOfSeason"] = 10] = "TrainingCampInSecondThirdOfSeason";
    SurfacingType[SurfacingType["TrainingCampCupSemis"] = 11] = "TrainingCampCupSemis";
    SurfacingType[SurfacingType["TrainingCampCupFinal"] = 12] = "TrainingCampCupFinal";
    SurfacingType[SurfacingType["SquadSellPlayer"] = 13] = "SquadSellPlayer";
    SurfacingType[SurfacingType["Apps"] = 14] = "Apps";
    SurfacingType[SurfacingType["ChooseTeamOnLastDay"] = 15] = "ChooseTeamOnLastDay";
})(SurfacingType || (SurfacingType = {}));
var DudeType;
(function (DudeType) {
    DudeType[DudeType["Manager"] = 0] = "Manager";
    DudeType[DudeType["Assistant"] = 1] = "Assistant";
    DudeType[DudeType["Trainer"] = 2] = "Trainer";
    DudeType[DudeType["Chairman"] = 3] = "Chairman";
    DudeType[DudeType["Lawyer"] = 4] = "Lawyer";
    DudeType[DudeType["Doctor"] = 5] = "Doctor";
    DudeType[DudeType["Scout"] = 6] = "Scout";
    DudeType[DudeType["Analyst"] = 7] = "Analyst";
    DudeType[DudeType["Agent"] = 8] = "Agent";
})(DudeType || (DudeType = {}));
var SurfacingFollowUp;
(function (SurfacingFollowUp) {
    SurfacingFollowUp[SurfacingFollowUp["SquadSellPlayer"] = 0] = "SquadSellPlayer";
    SurfacingFollowUp[SurfacingFollowUp["SquadSellPlayerProfile"] = 1] = "SquadSellPlayerProfile";
})(SurfacingFollowUp || (SurfacingFollowUp = {}));
var CheaterTypes;
(function (CheaterTypes) {
    CheaterTypes[CheaterTypes["MultiAccount"] = 1] = "MultiAccount";
    CheaterTypes[CheaterTypes["IllegalTransfer"] = 2] = "IllegalTransfer";
})(CheaterTypes || (CheaterTypes = {}));
var CheaterStatus;
(function (CheaterStatus) {
    CheaterStatus[CheaterStatus["Open"] = 1] = "Open";
    CheaterStatus[CheaterStatus["InProgress"] = 2] = "InProgress";
    CheaterStatus[CheaterStatus["Handled"] = 3] = "Handled";
    CheaterStatus[CheaterStatus["HandledAndLocked"] = 4] = "HandledAndLocked";
    CheaterStatus[CheaterStatus["HandledAndSuspended"] = 5] = "HandledAndSuspended";
    CheaterStatus[CheaterStatus["HandledAndForumBanned"] = 6] = "HandledAndForumBanned";
    CheaterStatus[CheaterStatus["HandledAlreadyPenalized"] = 7] = "HandledAlreadyPenalized";
    CheaterStatus[CheaterStatus["HandledNoCheater"] = 8] = "HandledNoCheater";
    CheaterStatus[CheaterStatus["HandledIllegalReport"] = 9] = "HandledIllegalReport";
    CheaterStatus[CheaterStatus["NotActivated"] = 999] = "NotActivated";
})(CheaterStatus || (CheaterStatus = {}));
var NewsFeedSenderType;
(function (NewsFeedSenderType) {
    NewsFeedSenderType[NewsFeedSenderType["Pundit"] = 0] = "Pundit";
    NewsFeedSenderType[NewsFeedSenderType["Doctor"] = 1] = "Doctor";
    NewsFeedSenderType[NewsFeedSenderType["Commentator"] = 2] = "Commentator";
    NewsFeedSenderType[NewsFeedSenderType["Chairman"] = 3] = "Chairman";
    NewsFeedSenderType[NewsFeedSenderType["Manager"] = 4] = "Manager";
    NewsFeedSenderType[NewsFeedSenderType["Cup"] = 5] = "Cup";
    NewsFeedSenderType[NewsFeedSenderType["Transfer"] = 6] = "Transfer";
    NewsFeedSenderType[NewsFeedSenderType["Analyst"] = 7] = "Analyst";
})(NewsFeedSenderType || (NewsFeedSenderType = {}));
var NewsFeedMediaType;
(function (NewsFeedMediaType) {
    NewsFeedMediaType[NewsFeedMediaType["None"] = 0] = "None";
    NewsFeedMediaType[NewsFeedMediaType["Image"] = 1] = "Image";
    NewsFeedMediaType[NewsFeedMediaType["Video"] = 2] = "Video";
})(NewsFeedMediaType || (NewsFeedMediaType = {}));
var TeamSlotLayout;
(function (TeamSlotLayout) {
    TeamSlotLayout[TeamSlotLayout["Default"] = 0] = "Default";
    TeamSlotLayout[TeamSlotLayout["WinnersLeague"] = 1] = "WinnersLeague";
    TeamSlotLayout[TeamSlotLayout["VipLeague"] = 2] = "VipLeague";
})(TeamSlotLayout || (TeamSlotLayout = {}));
var UserConnectionType;
(function (UserConnectionType) {
    UserConnectionType[UserConnectionType["Email"] = 0] = "Email";
    UserConnectionType[UserConnectionType["Facebook"] = 1] = "Facebook";
    UserConnectionType[UserConnectionType["GooglePlus"] = 2] = "GooglePlus";
    UserConnectionType[UserConnectionType["Twitter"] = 3] = "Twitter";
    UserConnectionType[UserConnectionType["GameCenter"] = 4] = "GameCenter";
})(UserConnectionType || (UserConnectionType = {}));
var UserImageType;
(function (UserImageType) {
    UserImageType[UserImageType["Avatar"] = 0] = "Avatar";
})(UserImageType || (UserImageType = {}));
var CrewImageType;
(function (CrewImageType) {
    CrewImageType[CrewImageType["Avatar"] = 0] = "Avatar";
    CrewImageType[CrewImageType["CoverImage"] = 1] = "CoverImage";
})(CrewImageType || (CrewImageType = {}));
var LeagueMode;
(function (LeagueMode) {
    LeagueMode[LeagueMode["Normal"] = 0] = "Normal";
    LeagueMode[LeagueMode["Crew"] = 1] = "Crew";
    LeagueMode[LeagueMode["Battle"] = 2] = "Battle";
    LeagueMode[LeagueMode["WinnersLeague"] = 3] = "WinnersLeague";
    LeagueMode[LeagueMode["VipLeague"] = 4] = "VipLeague";
})(LeagueMode || (LeagueMode = {}));
var LeagueScheduleType;
(function (LeagueScheduleType) {
    LeagueScheduleType[LeagueScheduleType["League"] = 0] = "League";
    LeagueScheduleType[LeagueScheduleType["CrewBattleLeague"] = 1] = "CrewBattleLeague";
    LeagueScheduleType[LeagueScheduleType["Knockout"] = 2] = "Knockout";
    LeagueScheduleType[LeagueScheduleType["Poules"] = 3] = "Poules";
    LeagueScheduleType[LeagueScheduleType["Tournament"] = 4] = "Tournament";
})(LeagueScheduleType || (LeagueScheduleType = {}));
var LeaguePhase;
(function (LeaguePhase) {
    LeaguePhase[LeaguePhase["DuringLeaguePhase"] = 0] = "DuringLeaguePhase";
    LeaguePhase[LeaguePhase["PreparationPhase"] = 1] = "PreparationPhase";
    LeaguePhase[LeaguePhase["LastDayPhase"] = 2] = "LastDayPhase";
    LeaguePhase[LeaguePhase["PoulesPhase"] = 3] = "PoulesPhase";
    LeaguePhase[LeaguePhase["KnockoutPhase"] = 4] = "KnockoutPhase";
})(LeaguePhase || (LeaguePhase = {}));
var QuickbloxChatEventType;
(function (QuickbloxChatEventType) {
    QuickbloxChatEventType[QuickbloxChatEventType["BattleCreated"] = 0] = "BattleCreated";
    QuickbloxChatEventType[QuickbloxChatEventType["BattleStarted"] = 1] = "BattleStarted";
    QuickbloxChatEventType[QuickbloxChatEventType["MemberJoined"] = 2] = "MemberJoined";
})(QuickbloxChatEventType || (QuickbloxChatEventType = {}));
var SwitchSlotFlow;
(function (SwitchSlotFlow) {
    SwitchSlotFlow[SwitchSlotFlow["Normal"] = 0] = "Normal";
    SwitchSlotFlow[SwitchSlotFlow["CreateCrewLeague"] = 1] = "CreateCrewLeague";
    SwitchSlotFlow[SwitchSlotFlow["JoinCrewLeague"] = 2] = "JoinCrewLeague";
    SwitchSlotFlow[SwitchSlotFlow["WinnersLeagueTicket"] = 3] = "WinnersLeagueTicket";
    SwitchSlotFlow[SwitchSlotFlow["VipLeagueTicket"] = 4] = "VipLeagueTicket";
})(SwitchSlotFlow || (SwitchSlotFlow = {}));
var Cookies;
(function (Cookies) {
    Cookies[Cookies["FacebookCultureCode"] = 0] = "FacebookCultureCode";
    Cookies[Cookies["DefaultCultureCode"] = 1] = "DefaultCultureCode";
    Cookies[Cookies["CultureCode"] = 2] = "CultureCode";
})(Cookies || (Cookies = {}));
var StadiumPartLevelBonusType;
(function (StadiumPartLevelBonusType) {
    StadiumPartLevelBonusType[StadiumPartLevelBonusType["Percentage"] = 0] = "Percentage";
    StadiumPartLevelBonusType[StadiumPartLevelBonusType["ClubFunds"] = 1] = "ClubFunds";
})(StadiumPartLevelBonusType || (StadiumPartLevelBonusType = {}));
var ServiceWorkerMessageType;
(function (ServiceWorkerMessageType) {
    ServiceWorkerMessageType[ServiceWorkerMessageType["InitializeCrewStorageInfo"] = 0] = "InitializeCrewStorageInfo";
})(ServiceWorkerMessageType || (ServiceWorkerMessageType = {}));
var PushnotificationType;
(function (PushnotificationType) {
    PushnotificationType[PushnotificationType["CrewChat"] = 0] = "CrewChat";
})(PushnotificationType || (PushnotificationType = {}));
var ChatProtocol;
(function (ChatProtocol) {
    ChatProtocol[ChatProtocol["BOSH"] = 1] = "BOSH";
    ChatProtocol[ChatProtocol["WebSocket"] = 2] = "WebSocket";
})(ChatProtocol || (ChatProtocol = {}));
var ErrorHandlerType;
(function (ErrorHandlerType) {
    ErrorHandlerType[ErrorHandlerType["Sentry"] = 0] = "Sentry";
    ErrorHandlerType[ErrorHandlerType["Bugsnag"] = 1] = "Bugsnag";
    ErrorHandlerType[ErrorHandlerType["Stub"] = 2] = "Stub";
})(ErrorHandlerType || (ErrorHandlerType = {}));
var CrewBattleRequestStatus;
(function (CrewBattleRequestStatus) {
    CrewBattleRequestStatus[CrewBattleRequestStatus["Recruiting"] = 0] = "Recruiting";
    CrewBattleRequestStatus[CrewBattleRequestStatus["Matchmaking"] = 1] = "Matchmaking";
})(CrewBattleRequestStatus || (CrewBattleRequestStatus = {}));
var GdprSettingType;
(function (GdprSettingType) {
    GdprSettingType[GdprSettingType["DataStorage"] = 1] = "DataStorage";
    GdprSettingType[GdprSettingType["PersonalisedAds"] = 2] = "PersonalisedAds";
})(GdprSettingType || (GdprSettingType = {}));
var EventNotificationType;
(function (EventNotificationType) {
    EventNotificationType[EventNotificationType["Shop"] = 0] = "Shop";
    EventNotificationType[EventNotificationType["ChooseTeam"] = 1] = "ChooseTeam";
    EventNotificationType[EventNotificationType["ChooseLeague"] = 2] = "ChooseLeague";
    EventNotificationType[EventNotificationType["Career"] = 3] = "Career";
    EventNotificationType[EventNotificationType["Squad"] = 4] = "Squad";
    EventNotificationType[EventNotificationType["LineUp"] = 5] = "LineUp";
    EventNotificationType[EventNotificationType["Tactics"] = 6] = "Tactics";
    EventNotificationType[EventNotificationType["Specialists"] = 7] = "Specialists";
    EventNotificationType[EventNotificationType["Training"] = 8] = "Training";
    EventNotificationType[EventNotificationType["TransferList"] = 9] = "TransferList";
    EventNotificationType[EventNotificationType["Scout"] = 10] = "Scout";
    EventNotificationType[EventNotificationType["Spy"] = 11] = "Spy";
    EventNotificationType[EventNotificationType["Friendlies"] = 12] = "Friendlies";
    EventNotificationType[EventNotificationType["Stadium"] = 13] = "Stadium";
    EventNotificationType[EventNotificationType["Sponsors"] = 14] = "Sponsors";
    EventNotificationType[EventNotificationType["BusinessClub"] = 15] = "BusinessClub";
    EventNotificationType[EventNotificationType["SecretTraining"] = 16] = "SecretTraining";
    EventNotificationType[EventNotificationType["TrainingCamp"] = 17] = "TrainingCamp";
    EventNotificationType[EventNotificationType["Doctor"] = 18] = "Doctor";
    EventNotificationType[EventNotificationType["Lawyer"] = 19] = "Lawyer";
    EventNotificationType[EventNotificationType["Friends"] = 20] = "Friends";
})(EventNotificationType || (EventNotificationType = {}));
var TodoNotificationType;
(function (TodoNotificationType) {
    TodoNotificationType[TodoNotificationType["WebNotification"] = 0] = "WebNotification";
    TodoNotificationType[TodoNotificationType["EventNotification"] = 1] = "EventNotification";
})(TodoNotificationType || (TodoNotificationType = {}));
var RoundCurrency;
(function (RoundCurrency) {
    RoundCurrency[RoundCurrency["NoRounding"] = 0] = "NoRounding";
    RoundCurrency[RoundCurrency["Upwards"] = 1] = "Upwards";
    RoundCurrency[RoundCurrency["Downwards"] = 2] = "Downwards";
})(RoundCurrency || (RoundCurrency = {}));
var ResignationReason;
(function (ResignationReason) {
    ResignationReason[ResignationReason["Resign"] = 0] = "Resign";
    ResignationReason[ResignationReason["LeaveEliminatedTeam"] = 1] = "LeaveEliminatedTeam";
})(ResignationReason || (ResignationReason = {}));
var PreEventType;
(function (PreEventType) {
    PreEventType[PreEventType["None"] = 0] = "None";
    PreEventType[PreEventType["Header"] = 1] = "Header";
    PreEventType[PreEventType["BicycleKick"] = 2] = "BicycleKick";
    PreEventType[PreEventType["Shot"] = 3] = "Shot";
    PreEventType[PreEventType["Volley"] = 4] = "Volley";
    PreEventType[PreEventType["LongRangeShot"] = 5] = "LongRangeShot";
})(PreEventType || (PreEventType = {}));
var PostEventType;
(function (PostEventType) {
    PostEventType[PostEventType["None"] = 0] = "None";
    PostEventType[PostEventType["Miss"] = 1] = "Miss";
    PostEventType[PostEventType["GoalkeeperSave"] = 2] = "GoalkeeperSave";
    PostEventType[PostEventType["Woodwork"] = 3] = "Woodwork";
    PostEventType[PostEventType["GoalHeader"] = 4] = "GoalHeader";
    PostEventType[PostEventType["GoalBicycleKick"] = 5] = "GoalBicycleKick";
    PostEventType[PostEventType["GoalShot"] = 6] = "GoalShot";
    PostEventType[PostEventType["GoalVolley"] = 7] = "GoalVolley";
    PostEventType[PostEventType["GoalLongRangeShot"] = 8] = "GoalLongRangeShot";
})(PostEventType || (PostEventType = {}));
var ExpressionType;
(function (ExpressionType) {
    ExpressionType[ExpressionType["Neutral"] = 0] = "Neutral";
    ExpressionType[ExpressionType["Hopeful"] = 1] = "Hopeful";
    ExpressionType[ExpressionType["Happy"] = 2] = "Happy";
    ExpressionType[ExpressionType["Disappointment"] = 3] = "Disappointment";
    ExpressionType[ExpressionType["Disapproval"] = 4] = "Disapproval";
    ExpressionType[ExpressionType["Ouch"] = 5] = "Ouch";
})(ExpressionType || (ExpressionType = {}));
var TeamSide;
(function (TeamSide) {
    TeamSide[TeamSide["Home"] = 0] = "Home";
    TeamSide[TeamSide["Away"] = 1] = "Away";
})(TeamSide || (TeamSide = {}));
var BaseLeagueThemeType;
(function (BaseLeagueThemeType) {
    BaseLeagueThemeType[BaseLeagueThemeType["Default"] = 0] = "Default";
    BaseLeagueThemeType[BaseLeagueThemeType["FourFourToons"] = 1] = "FourFourToons";
    BaseLeagueThemeType[BaseLeagueThemeType["Knockout"] = 2] = "Knockout";
    BaseLeagueThemeType[BaseLeagueThemeType["Tournament"] = 3] = "Tournament";
    BaseLeagueThemeType[BaseLeagueThemeType["WinnersLeague"] = 4] = "WinnersLeague";
})(BaseLeagueThemeType || (BaseLeagueThemeType = {}));
var RankingStatus;
(function (RankingStatus) {
    RankingStatus[RankingStatus["Unused"] = 0] = "Unused";
    RankingStatus[RankingStatus["VirtuallyQualifiedForKnockout"] = 1] = "VirtuallyQualifiedForKnockout";
    RankingStatus[RankingStatus["VirtuallyEliminatedForKnockout"] = 2] = "VirtuallyEliminatedForKnockout";
    RankingStatus[RankingStatus["QualifiedForKnockout"] = 3] = "QualifiedForKnockout";
    RankingStatus[RankingStatus["EliminatedForKnockout"] = 4] = "EliminatedForKnockout";
})(RankingStatus || (RankingStatus = {}));
var WinnersLeagueQualificationStatus;
(function (WinnersLeagueQualificationStatus) {
    WinnersLeagueQualificationStatus[WinnersLeagueQualificationStatus["Unused"] = 0] = "Unused";
    WinnersLeagueQualificationStatus[WinnersLeagueQualificationStatus["VirtuallyQualifiedForWinnersLeague"] = 1] = "VirtuallyQualifiedForWinnersLeague";
    WinnersLeagueQualificationStatus[WinnersLeagueQualificationStatus["VirtuallyEliminatedForWinnersLeague"] = 2] = "VirtuallyEliminatedForWinnersLeague";
})(WinnersLeagueQualificationStatus || (WinnersLeagueQualificationStatus = {}));
var MatchLegType;
(function (MatchLegType) {
    MatchLegType[MatchLegType["None"] = 0] = "None";
    MatchLegType[MatchLegType["FirstLeg"] = 1] = "FirstLeg";
    MatchLegType[MatchLegType["SecondLeg"] = 2] = "SecondLeg";
})(MatchLegType || (MatchLegType = {}));
var WatchVideoPlacementType;
(function (WatchVideoPlacementType) {
    WatchVideoPlacementType[WatchVideoPlacementType["None"] = 0] = "None";
    WatchVideoPlacementType["BusinessClub"] = "BusinessClub";
    WatchVideoPlacementType["Shop"] = "Shop";
    WatchVideoPlacementType["Header"] = "Header";
    WatchVideoPlacementType["Transfers"] = "Transfer";
    WatchVideoPlacementType["Spy"] = "SpyTimer";
    WatchVideoPlacementType["Training"] = "TrainingTimer";
    WatchVideoPlacementType["Scout"] = "ScoutTimer";
})(WatchVideoPlacementType || (WatchVideoPlacementType = {}));
var TicketStatus;
(function (TicketStatus) {
    TicketStatus[TicketStatus["Created"] = 0] = "Created";
    TicketStatus[TicketStatus["Available"] = 1] = "Available";
    TicketStatus[TicketStatus["InQueue"] = 2] = "InQueue";
    TicketStatus[TicketStatus["Consumed"] = 3] = "Consumed";
})(TicketStatus || (TicketStatus = {}));
var TeamSlotStatus;
(function (TeamSlotStatus) {
    TeamSlotStatus[TeamSlotStatus["NotImplemented"] = 0] = "NotImplemented";
    TeamSlotStatus[TeamSlotStatus["WinnersLeagueQueue"] = 1] = "WinnersLeagueQueue";
})(TeamSlotStatus || (TeamSlotStatus = {}));
var ChooseLeaguePage;
(function (ChooseLeaguePage) {
    ChooseLeaguePage[ChooseLeaguePage["Simple"] = 0] = "Simple";
    ChooseLeaguePage[ChooseLeaguePage["Advanced"] = 1] = "Advanced";
})(ChooseLeaguePage || (ChooseLeaguePage = {}));
var PlayerRarity;
(function (PlayerRarity) {
    PlayerRarity[PlayerRarity["Default"] = 0] = "Default";
    PlayerRarity[PlayerRarity["Legend"] = 1] = "Legend";
    PlayerRarity[PlayerRarity["InForm"] = 2] = "InForm";
})(PlayerRarity || (PlayerRarity = {}));
var PlayerWorldStarLevel;
(function (PlayerWorldStarLevel) {
    PlayerWorldStarLevel[PlayerWorldStarLevel["None"] = 0] = "None";
    PlayerWorldStarLevel[PlayerWorldStarLevel["WorldStar1"] = 1] = "WorldStar1";
    PlayerWorldStarLevel[PlayerWorldStarLevel["WorldStar2"] = 2] = "WorldStar2";
})(PlayerWorldStarLevel || (PlayerWorldStarLevel = {}));

//# sourceMappingURL=enums.js.map
