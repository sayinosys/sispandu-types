
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.AchievementScalarFieldEnum = {
  id: 'id',
  no: 'no',
  fase: 'fase',
  description: 'description',
  elementId: 'elementId',
  disable: 'disable'
};

exports.Prisma.AuthScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  personalId: 'personalId'
};

exports.Prisma.BidangKeahlianScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  disable: 'disable'
};

exports.Prisma.BookScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  author: 'author'
};

exports.Prisma.CalendarScalarFieldEnum = {
  id: 'id',
  refId: 'refId',
  name: 'name',
  description: 'description',
  start: 'start',
  end: 'end',
  color: 'color',
  classRoomIds: 'classRoomIds',
  studentIds: 'studentIds',
  teacherIds: 'teacherIds'
};

exports.Prisma.ClassRoomScalarFieldEnum = {
  id: 'id',
  name: 'name',
  yearId: 'yearId',
  waliId: 'waliId',
  level: 'level',
  majorId: 'majorId',
  studentIds: 'studentIds',
  eventIds: 'eventIds',
  disable: 'disable',
  teachingIds: 'teachingIds'
};

exports.Prisma.ElementScalarFieldEnum = {
  id: 'id',
  no: 'no',
  name: 'name',
  description: 'description',
  mapelId: 'mapelId',
  disable: 'disable',
  scheduleClassIds: 'scheduleClassIds'
};

exports.Prisma.FamilyTreeChildScalarFieldEnum = {
  id: 'id',
  no: 'no',
  type: 'type',
  kkId: 'kkId',
  personalId: 'personalId'
};

exports.Prisma.FamilyTreeScalarFieldEnum = {
  id: 'id',
  nokk: 'nokk',
  fatherId: 'fatherId',
  motherId: 'motherId',
  waliId: 'waliId',
  coupleId: 'coupleId'
};

exports.Prisma.InstansiScalarFieldEnum = {
  id: 'id',
  npsn: 'npsn',
  name: 'name',
  isPrivate: 'isPrivate',
  level: 'level',
  religion: 'religion',
  major: 'major',
  majorIds: 'majorIds',
  disable: 'disable'
};

exports.Prisma.KonsentrasiKeahlianScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  programId: 'programId',
  tahun: 'tahun',
  instansiIds: 'instansiIds',
  disable: 'disable'
};

exports.Prisma.LinkScalarFieldEnum = {
  id: 'id',
  url: 'url',
  title: 'title',
  description: 'description',
  image: 'image',
  width: 'width',
  height: 'height',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MataPelajaranScalarFieldEnum = {
  id: 'id',
  level: 'level',
  type: 'type',
  no: 'no',
  code: 'code',
  name: 'name',
  religion: 'religion',
  programId: 'programId',
  keahlianid: 'keahlianid',
  instansiId: 'instansiId',
  disable: 'disable'
};

exports.Prisma.OLearningScalarFieldEnum = {
  id: 'id',
  refId: 'refId',
  no: 'no',
  content: 'content',
  taksonomi: 'taksonomi',
  sentence: 'sentence'
};

exports.Prisma.OMaterialScalarFieldEnum = {
  id: 'id',
  refId: 'refId',
  no: 'no',
  content: 'content',
  model: 'model'
};

exports.Prisma.ObjectiveScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  instansiId: 'instansiId',
  yearId: 'yearId',
  mapelId: 'mapelId',
  elementId: 'elementId',
  achievementId: 'achievementId',
  code: 'code',
  kkm: 'kkm',
  steps: 'steps',
  subjectMatter: 'subjectMatter',
  competencie: 'competencie',
  firstSkill: 'firstSkill',
  triggerQuest: 'triggerQuest',
  disable: 'disable',
  deviceIds: 'deviceIds',
  toolIds: 'toolIds',
  mateIds: 'mateIds',
  methIds: 'methIds',
  mediaIds: 'mediaIds'
};

exports.Prisma.OhelperScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  toolIds: 'toolIds',
  mateIds: 'mateIds',
  methIds: 'methIds',
  mediaIds: 'mediaIds'
};

exports.Prisma.OpppScalarFieldEnum = {
  id: 'id',
  refId: 'refId',
  name: 'name',
  description: 'description'
};

exports.Prisma.OresourceScalarFieldEnum = {
  id: 'id',
  type: 'type',
  refId: 'refId',
  linkId: 'linkId',
  description: 'description'
};

exports.Prisma.PersonalScalarFieldEnum = {
  id: 'id',
  nik: 'nik',
  nisn: 'nisn',
  type: 'type',
  fullname: 'fullname',
  gender: 'gender',
  foreign: 'foreign',
  country: 'country',
  religion: 'religion',
  email: 'email',
  belajarId: 'belajarId',
  nophone: 'nophone',
  isLife: 'isLife',
  disable: 'disable'
};

exports.Prisma.ProgramKeahlianScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  bidangId: 'bidangId',
  disable: 'disable'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  key: 'key',
  instansiId: 'instansiId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ScheduleScalarFieldEnum = {
  id: 'id',
  yearId: 'yearId',
  mapelId: 'mapelId',
  disable: 'disable'
};

exports.Prisma.SchoolYearScalarFieldEnum = {
  id: 'id',
  year: 'year',
  instansiId: 'instansiId',
  disable: 'disable'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  nis: 'nis',
  lastSchool: 'lastSchool',
  personalId: 'personalId',
  majorId: 'majorId',
  classRoomIds: 'classRoomIds',
  startYearId: 'startYearId',
  instansiId: 'instansiId',
  eventIds: 'eventIds',
  disable: 'disable'
};

exports.Prisma.TDeviceScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  instansiId: 'instansiId',
  mapelId: 'mapelId',
  objectiveIds: 'objectiveIds',
  disable: 'disable'
};

exports.Prisma.TeacherScalarFieldEnum = {
  id: 'id',
  personalId: 'personalId',
  instansiId: 'instansiId',
  eventIds: 'eventIds',
  nip: 'nip',
  nrg: 'nrg',
  noKarpeg: 'noKarpeg',
  tmtTugas: 'tmtTugas',
  tmtGol: 'tmtGol',
  position: 'position',
  rank: 'rank',
  period: 'period',
  certificate: 'certificate',
  disable: 'disable'
};

exports.Prisma.TeachingScalarFieldEnum = {
  id: 'id',
  refId: 'refId',
  hours: 'hours',
  isEven: 'isEven',
  teacherId: 'teacherId',
  classRoomIds: 'classRoomIds',
  elemenIds: 'elemenIds',
  disable: 'disable'
};

exports.Prisma.TrackerScalarFieldEnum = {
  id: 'id',
  point: 'point',
  type: 'type',
  userId: 'userId',
  refId: 'refId',
  instansiId: 'instansiId',
  createdAt: 'createdAt',
  mapelId: 'mapelId',
  elementId: 'elementId',
  cpId: 'cpId',
  bidangId: 'bidangId',
  programId: 'programId',
  konsentrasiId: 'konsentrasiId',
  tpId: 'tpId',
  teacherId: 'teacherId',
  kelasId: 'kelasId',
  muridId: 'muridId',
  jadwalId: 'jadwalId',
  mengajarId: 'mengajarId',
  tujuanId: 'tujuanId',
  perangkatId: 'perangkatId'
};

exports.Prisma.UploadScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  url: 'url'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  picture: 'picture',
  username: 'username',
  active: 'active',
  verify: 'verify',
  password: 'password',
  passhash: 'passhash',
  roleId: 'roleId',
  disable: 'disable'
};
exports.ChildType = {
  KANDUNG: 'KANDUNG',
  TIRI: 'TIRI',
  ANGKAT: 'ANGKAT'
};

exports.Fase = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  FP: 'FP'
};

exports.Gender = {
  L: 'L',
  P: 'P'
};

exports.Level = {
  SD: 'SD',
  SMP: 'SMP',
  SMA: 'SMA',
  SMK: 'SMK'
};

exports.LevelEdu = {
  SD: 'SD',
  SMP: 'SMP',
  SMA: 'SMA',
  D1: 'D1',
  D2: 'D2',
  D3: 'D3',
  D4: 'D4',
  S1: 'S1',
  S2: 'S2',
  S3: 'S3'
};

exports.MataPelajaranType = {
  UMUM: 'UMUM',
  PROGRAM: 'PROGRAM',
  KONSENTRASI: 'KONSENTRASI',
  MULOK: 'MULOK'
};

exports.OMaterialModel = {
  DL: 'DL',
  IL: 'IL',
  PBL: 'PBL',
  PjBL: 'PjBL',
  TF: 'TF',
  PSL: 'PSL'
};

exports.OhelperType = {
  TOOL: 'TOOL',
  MATE: 'MATE',
  METH: 'METH',
  MEDIA: 'MEDIA'
};

exports.OresourceType = {
  URL: 'URL',
  BOOK: 'BOOK'
};

exports.PointTracker = {
  instansi: 'instansi',
  user: 'user',
  mapel: 'mapel',
  elemen: 'elemen',
  cp: 'cp',
  bidang: 'bidang',
  program: 'program',
  konsentrasi: 'konsentrasi',
  tp: 'tp',
  teacher: 'teacher',
  kelas: 'kelas',
  murid: 'murid',
  jadwal: 'jadwal',
  mengajar: 'mengajar',
  acp: 'acp',
  akm: 'akm',
  amp: 'amp',
  atp: 'atp',
  a_asesmen: 'a_asesmen',
  perangkat: 'perangkat'
};

exports.Religion = {
  Islam: 'Islam',
  Kristen: 'Kristen',
  Katolik: 'Katolik',
  Hindu: 'Hindu',
  Buddha: 'Buddha',
  Khonghucu: 'Khonghucu'
};

exports.Roles = {
  SU: 'SU',
  GURU: 'GURU',
  STAF: 'STAF',
  SISWA: 'SISWA'
};

exports.Taksonomi = {
  C1: 'C1',
  C2: 'C2',
  C3: 'C3',
  C4: 'C4',
  C5: 'C5',
  C6: 'C6',
  P1: 'P1',
  P2: 'P2',
  P3: 'P3',
  P4: 'P4',
  P5: 'P5'
};

exports.TypePersonal = {
  ADMIN: 'ADMIN',
  GURU: 'GURU',
  SISWA: 'SISWA',
  IBU: 'IBU',
  AYAH: 'AYAH',
  WALI: 'WALI'
};

exports.TypeTracker = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DISABLE: 'DISABLE',
  RECOVER: 'RECOVER'
};

exports.UploadType = {
  DRIVE: 'DRIVE',
  STORAGE: 'STORAGE'
};

exports.Prisma.ModelName = {
  Tracker: 'Tracker',
  Instansi: 'Instansi',
  MataPelajaran: 'MataPelajaran',
  Element: 'Element',
  Achievement: 'Achievement',
  BidangKeahlian: 'BidangKeahlian',
  ProgramKeahlian: 'ProgramKeahlian',
  KonsentrasiKeahlian: 'KonsentrasiKeahlian',
  Role: 'Role',
  User: 'User',
  Upload: 'Upload',
  Personal: 'Personal',
  Auth: 'Auth',
  FamilyTree: 'FamilyTree',
  FamilyTreeChild: 'FamilyTreeChild',
  SchoolYear: 'SchoolYear',
  Teacher: 'Teacher',
  ClassRoom: 'ClassRoom',
  Student: 'Student',
  Schedule: 'Schedule',
  Teaching: 'Teaching',
  Link: 'Link',
  Objective: 'Objective',
  OMaterial: 'OMaterial',
  OLearning: 'OLearning',
  Ohelper: 'Ohelper',
  Oppp: 'Oppp',
  Oresource: 'Oresource',
  Book: 'Book',
  TDevice: 'TDevice',
  Calendar: 'Calendar'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
