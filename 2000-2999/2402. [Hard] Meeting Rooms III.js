//  https://leetcode.com/problems/meeting-rooms-iii/description

var mostBooked = function(n, meetings) {
        const ans = new Array(n).fill(0);
        const times = new Array(n).fill(0);
        meetings.sort((a, b) => a[0] - b[0]);

        for (let i = 0; i < meetings.length; i++) {
            const [start, end] = meetings[i];
            let flag = false;
            let minind = -1;
            let val = Number.MAX_SAFE_INTEGER;
            for (let j = 0; j < n; j++) {
                if (times[j] < val) {
                    val = times[j];
                    minind = j;
                }
                if (times[j] <= start) {
                    flag = true;
                    ans[j]++;
                    times[j] = end;
                    break;
                }
            }
            if (!flag) {
                ans[minind]++;
                times[minind] += (end - start);
            }
        }

        let maxi = -1;
        let id = -1;
        for (let i = 0; i < n; i++) {
            if (ans[i] > maxi) {
                maxi = ans[i];
                id = i;
            }
        }
        return id;    
};

/*
Approaches
(Also explained in the code)

Initialization:

We initialize two vectors: ans to keep track of the number of meetings each person attends, and times to keep track of the end time of each person's last meeting.
Both vectors are initialized with zeros.
Sorting Meetings:

We sort the meetings based on their start times. This helps us process them in chronological order.
Processing Meetings:

For each meeting, we find the person who has the earliest available time slot to attend the meeting.
If there's a person available (i.e., their last meeting ends before the current meeting starts), we assign them to attend the meeting and update their end time.
If no person is available, we find the person who has the earliest end time among all persons and assign them to attend the meeting. We also update their end time accordingly.
Finding Most Booked:

After processing all meetings, we find the person who attended the maximum number of meetings.
We iterate through the ans vector and find the person with the highest count of attended meetings.
Return Result:

We return the ID of the person who attended the most meetings.
Complexity
Time complexity:
O(nlogn)

Space complexity:
O(n)
*/
