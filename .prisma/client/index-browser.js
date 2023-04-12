
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
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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
  eventIds: 'eventIds'
});

exports.Prisma.ElementScalarFieldEnum = makeEnum({
  id: 'id',
  no: 'no',
  name: 'name',
  description: 'description',
  mapelId: 'mapelId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.KonsentrasiKeahlianScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  programId: 'programId',
  tahun: 'tahun',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  instansiIds: 'instansiIds'
});

exports.Prisma.MataPelajaranScalarFieldEnum = makeEnum({
  id: 'id',
  no: 'no',
  code: 'code',
  name: 'name',
  religion: 'religion',
  vocational: 'vocational',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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
  isLife: 'isLife'
});

exports.Prisma.ProgramKeahlianScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  bidangId: 'bidangId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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

exports.Prisma.SchoolYearScalarFieldEnum = makeEnum({
  id: 'id',
  year: 'year',
  instansiId: 'instansiId'
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
  eventIds: 'eventIds'
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
  certificate: 'certificate'
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
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  roleId: 'roleId'
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

exports.Religion = makeEnum({
  Islam: 'Islam',
  Protestan: 'Protestan',
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

exports.Prisma.ModelName = makeEnum({
  BidangKeahlian: 'BidangKeahlian',
  ProgramKeahlian: 'ProgramKeahlian',
  KonsentrasiKeahlian: 'KonsentrasiKeahlian',
  Achievement: 'Achievement',
  Element: 'Element',
  MataPelajaran: 'MataPelajaran',
  Instansi: 'Instansi',
  Role: 'Role',
  User: 'User',
  Personal: 'Personal',
  Auth: 'Auth',
  FamilyTree: 'FamilyTree',
  FamilyTreeChild: 'FamilyTreeChild',
  Student: 'Student',
  Teacher: 'Teacher',
  ClassRoom: 'ClassRoom',
  SchoolYear: 'SchoolYear',
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
