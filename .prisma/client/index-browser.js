
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
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
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AchievementScalarFieldEnum = makeEnum({
  id: 'id',
  no: 'no',
  fase: 'fase',
  description: 'description',
  elementId: 'elementId',
  disable: 'disable'
});

exports.Prisma.AuthScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  personalId: 'personalId'
});

exports.Prisma.BidangKeahlianScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  disable: 'disable'
});

exports.Prisma.CalendarScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ClassRoomScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  yearId: 'yearId',
  waliId: 'waliId',
  level: 'level',
  majorId: 'majorId',
  studentIds: 'studentIds',
  eventIds: 'eventIds',
  disable: 'disable'
});

exports.Prisma.ElementScalarFieldEnum = makeEnum({
  id: 'id',
  no: 'no',
  name: 'name',
  description: 'description',
  mapelId: 'mapelId',
  disable: 'disable',
  scheduleClassIds: 'scheduleClassIds'
});

exports.Prisma.FamilyTreeChildScalarFieldEnum = makeEnum({
  id: 'id',
  no: 'no',
  type: 'type',
  kkId: 'kkId',
  personalId: 'personalId'
});

exports.Prisma.FamilyTreeScalarFieldEnum = makeEnum({
  id: 'id',
  nokk: 'nokk',
  fatherId: 'fatherId',
  motherId: 'motherId',
  waliId: 'waliId',
  coupleId: 'coupleId'
});

exports.Prisma.InstansiScalarFieldEnum = makeEnum({
  id: 'id',
  npsn: 'npsn',
  name: 'name',
  isPrivate: 'isPrivate',
  level: 'level',
  religion: 'religion',
  major: 'major',
  majorIds: 'majorIds',
  disable: 'disable'
});

exports.Prisma.KonsentrasiKeahlianScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  programId: 'programId',
  tahun: 'tahun',
  instansiIds: 'instansiIds',
  disable: 'disable'
});

exports.Prisma.MataPelajaranScalarFieldEnum = makeEnum({
  id: 'id',
  no: 'no',
  code: 'code',
  name: 'name',
  religion: 'religion',
  vocational: 'vocational',
  disable: 'disable'
});

exports.Prisma.PersonalScalarFieldEnum = makeEnum({
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
});

exports.Prisma.ProgramKeahlianScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  bidangId: 'bidangId',
  disable: 'disable'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  id: 'id',
  key: 'key',
  instansiId: 'instansiId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ScheduleClassScalarFieldEnum = makeEnum({
  id: 'id',
  refId: 'refId',
  hours: 'hours',
  isEven: 'isEven',
  teacherId: 'teacherId',
  classRoomId: 'classRoomId',
  elemenIds: 'elemenIds'
});

exports.Prisma.ScheduleScalarFieldEnum = makeEnum({
  id: 'id',
  yearId: 'yearId',
  mapelId: 'mapelId',
  disable: 'disable'
});

exports.Prisma.SchoolYearScalarFieldEnum = makeEnum({
  id: 'id',
  year: 'year',
  instansiId: 'instansiId',
  disable: 'disable'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentScalarFieldEnum = makeEnum({
  id: 'id',
  nis: 'nis',
  nisn: 'nisn',
  personalId: 'personalId',
  majorId: 'majorId',
  classRoomIds: 'classRoomIds',
  startYearId: 'startYearId',
  instansiId: 'instansiId',
  eventIds: 'eventIds',
  disable: 'disable'
});

exports.Prisma.TeacherScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TrackerScalarFieldEnum = makeEnum({
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
  jadwalId: 'jadwalId'
});

exports.Prisma.UploadScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  name: 'name',
  url: 'url'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
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
});
exports.ChildType = makeEnum({
  KANDUNG: 'KANDUNG',
  TIRI: 'TIRI',
  ANGKAT: 'ANGKAT'
});

exports.Fase = makeEnum({
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  FP: 'FP'
});

exports.Gender = makeEnum({
  L: 'L',
  P: 'P'
});

exports.Level = makeEnum({
  SD: 'SD',
  SMP: 'SMP',
  SMA: 'SMA',
  SMK: 'SMK'
});

exports.LevelEdu = makeEnum({
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
});

exports.PointTracker = makeEnum({
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
  jadwal: 'jadwal'
});

exports.Religion = makeEnum({
  Islam: 'Islam',
  Kristen: 'Kristen',
  Katolik: 'Katolik',
  Hindu: 'Hindu',
  Buddha: 'Buddha',
  Khonghucu: 'Khonghucu'
});

exports.Roles = makeEnum({
  SU: 'SU',
  GURU: 'GURU',
  STAF: 'STAF',
  SISWA: 'SISWA'
});

exports.TypePersonal = makeEnum({
  ADMIN: 'ADMIN',
  GURU: 'GURU',
  SISWA: 'SISWA',
  IBU: 'IBU',
  AYAH: 'AYAH',
  WALI: 'WALI'
});

exports.TypeTracker = makeEnum({
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DISABLE: 'DISABLE',
  RECOVER: 'RECOVER'
});

exports.UploadType = makeEnum({
  DRIVE: 'DRIVE',
  STORAGE: 'STORAGE'
});

exports.Prisma.ModelName = makeEnum({
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
  ScheduleClass: 'ScheduleClass',
  Calendar: 'Calendar'
});

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
