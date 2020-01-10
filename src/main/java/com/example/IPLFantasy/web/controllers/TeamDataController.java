package com.example.IPLFantasy.web.controllers;

import com.example.IPLFantasy.web.dto.*;
import com.example.IPLFantasy.web.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class TeamDataController {
    @Autowired
    private PlayerRepository playerrepo;
    @Autowired
    private TeamRepository teamrepo;
    @Autowired
    private UserRepository userrepo;
    @Autowired
    private PlayingxiRepository playingxirepo;
    @Autowired
    private PowerPlayerRepository pprepo;
    @RequestMapping(value = "/api/getCSKData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> CSKData(){
        List<PlayersDto> players = playerrepo.findByTeam("CSK");
        return players;
    }
    @RequestMapping(value = "/api/getDCData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> DCData(){
        List<PlayersDto> players = playerrepo.findByTeam("DC");
        return players;
    }
    @RequestMapping(value = "/api/getMIData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> MIData(){
        List<PlayersDto> players = playerrepo.findByTeam("MI");
        return players;
    }
    @RequestMapping(value = "/api/getKKRData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> KKRData(){
        List<PlayersDto> players = playerrepo.findByTeam("KKR");
        return players;
    }
    @RequestMapping(value = "/api/getKXIPData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> KXIPData(){
        List<PlayersDto> players = playerrepo.findByTeam("KXIP");
        return players;
    }
    @RequestMapping(value = "/api/getRCBData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> RCBData(){
        List<PlayersDto> players = playerrepo.findByTeam("RCB");
        return players;
    }
    @RequestMapping(value = "/api/getRRData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> RRData(){
        List<PlayersDto> players = playerrepo.findByTeam("RR");
        return players;
    }
    @RequestMapping(value = "/api/getSRHData", method = RequestMethod.GET, produces = { "application/json"})
    public @ResponseBody
    List<PlayersDto> SRHData(){
        List<PlayersDto> players = playerrepo.findByTeam("SRH");
        return players;
    }


    @RequestMapping(value = "api/getSquadData", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody List<TeamDto> getSquad(@RequestParam("email") String email){

        return teamrepo.findByEmail(email);
    }
    @RequestMapping(value = "api/PlayerToAdd", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> addPlayers(@RequestParam("email") String email, @RequestParam("Id") Integer Id) {
        PlayersDto playerid = playerrepo.findId(Id);
        String team = playerid.getTeam();
        String Name = playerid.getName();
        String Notes = playerid.getNotes();
        String type = playerid.getType();


        String teamName = userrepo.findTeamName(email);


            List<TeamDto> players = teamrepo.findByEmail(email);
            if (players.size() < 15) {
                teamrepo.insertTeam(Id, teamName, email, Name, Notes, type, team);

                playerrepo.deletePlayer(Id);
                return new ResponseEntity<>("New player added!", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Please remove a player before adding another", HttpStatus.OK);
            }

    }

    @RequestMapping(value = "api/PlayerToRemove", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> removePlayers(@RequestParam("Id") Integer Id) {
        TeamDto playerid = teamrepo.findId(Id);
        String team = playerid.getTeam();
        String Name = playerid.getName();
        String Notes = playerid.getNotes();
        String type = playerid.getType();
        teamrepo.deleteTeam(Id);
        playingxirepo.deleteTeam(Id);
        playerrepo.insertPlayer(Id, Name, Notes, type, team);


        return new ResponseEntity<>("Player removed!", HttpStatus.OK);
    }
    @RequestMapping(value = "api/RemovePlaying11", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> removePlayeringXI(@RequestParam("Id") Integer Id) {
        playingxirepo.deleteTeam(Id);
        return new ResponseEntity<>("Player removed!", HttpStatus.OK);
    }

    @RequestMapping(value = "api/addPlaying11", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> addPlayingXI(@RequestParam("Id") Integer Id) {
        TeamDto playerid = teamrepo.findId(Id);
        String team = playerid.getTeam();
        String Name = playerid.getName();
        String Notes = playerid.getNotes();
        String type = playerid.getType();
        String email = playerid.getEmail();
        String teamName = playerid.getTeamName();


        List<TeamDto> players = teamrepo.findByEmail(email);
        if (players.size() < 11) {
            playingxirepo.insertTeam(Id, teamName, email, Name, Notes, type, team);

            return new ResponseEntity<>("New player added!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Please remove a player before adding another", HttpStatus.OK);
        }
    }
    @RequestMapping(value = "api/getPlaying11", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody List<PlayingxiDto> getPlaying11(@RequestParam("email") String email){

        return playingxirepo.findByEmail(email);
    }
    @RequestMapping(value = "api/getPowerPlayer", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody List<PowerPlayerDto> getPowerPlayer(@RequestParam("email") String email){

        return pprepo.findByEmail(email);
    }
    @RequestMapping(value = "api/addPowerPlayer", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> addPowerPlayer(@RequestParam("Id") Integer Id) {
        PlayingxiDto powerplayer = playingxirepo.findId(Id);
        String team = powerplayer.getTeam();
        String Name = powerplayer.getName();
        String Notes = powerplayer.getNotes();
        String type = powerplayer.getType();
        String email = powerplayer.getEmail();
        String teamName = powerplayer.getTeamName();


        List<PowerPlayerDto> powerplayers = pprepo.findByEmail(email);
        if (powerplayers.size() < 1) {
            pprepo.insertPP(Id, teamName, email, Name, Notes, type, team);

            return new ResponseEntity<>("New powerplayer selected!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Please remove a player before adding another", HttpStatus.OK);
        }
    }
    @RequestMapping(value = "api/RemovePowerPlayer", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody
    ResponseEntity<String> removePowerPlayers(@RequestParam("Id") Integer Id) {
        pprepo.deletePP(Id);
        return new ResponseEntity<>("Player removed!", HttpStatus.OK);
    }
    @RequestMapping(value = "api/getTeams", method = RequestMethod.GET, produces = {"application/json"})
    public @ResponseBody List<String> getTeams(){
        return teamrepo.findTeam();
    }
    @RequestMapping(value = "api/squadByTeam", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody List<TeamDto> getByTeam(@RequestParam("team_name") String team_name){
        return teamrepo.findByTeam(team_name);
    }
    @RequestMapping(value = "api/XIbyTeam", method = RequestMethod.POST, produces = {"application/json"})
    public @ResponseBody List<PlayingxiDto> XIByTeam(@RequestParam("team_name") String team_name){
        return playingxirepo.findByTeam(team_name);
    }

}
