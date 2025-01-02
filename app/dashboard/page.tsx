import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface InterviewSession {
  id: string;
  interviewerName: string;
  date: string;
  duration: string;
  score: number;
  topics: string[];
}

const mockSessions: InterviewSession[] = [
  {
    id: "1",
    interviewerName: "Sarah Chen",
    date: "2024-01-02",
    duration: "45 minutes",
    score: 85,
    topics: ["System Design", "Frontend Development"],
  },
  {
    id: "2",
    interviewerName: "Michael Rodriguez",
    date: "2024-01-01",
    duration: "30 minutes",
    score: 78,
    topics: ["Data Structures", "Algorithms"],
  },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Your Interview Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track your progress and review past interview sessions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Sessions</CardTitle>
              <CardDescription>All mock interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{mockSessions.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Score</CardTitle>
              <CardDescription>Across all sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {Math.round(
                  mockSessions.reduce((acc, session) => acc + session.score, 0) /
                    mockSessions.length
                )}%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Practice Time</CardTitle>
              <CardDescription>Total time spent</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">75 min</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Sessions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Recent Sessions</h2>
          <div className="grid gap-4">
            {mockSessions.map((session) => (
              <Card key={session.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{session.interviewerName}</CardTitle>
                      <CardDescription>{session.date}</CardDescription>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Score: {session.score}%
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {session.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Duration: {session.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 