import { authCloudRequest } from "@illa-public/illa-net"
import { TeamInfo } from "@illa-public/public-types"

export const fetchMyTeamsInfo = () => {
  return authCloudRequest<TeamInfo[]>({
    url: "/teams/my",
    method: "GET",
  })
}
